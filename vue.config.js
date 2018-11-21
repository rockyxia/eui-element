const striptags = require('./build/strip-tags')
const md = require('markdown-it')()
const slugify = require('transliteration').slugify;
const debug = process.env.NODE_ENV !== 'production'

/**
 * 由于v-pre会导致在加载时直接按内容生成页面.但是我们想要的是直接展示组件效果,通过正则进行替换
 * hljs是highlight.js中的高亮样式类名
 * @param  {[type]} render e.g '<code v-pre class="test"></code>' | '<code></code>'
 * @return {[type]}        e.g '<code class="hljs test></code>'   | '<code class="hljs></code>'
 */
const wrap = function(render) {
  return function() {
    return render.apply(this, arguments)
      .replace('<code v-pre class="', '<code class="hljs ')
      .replace('<code>', '<code class="hljs">')
  }
}

/**
 * 由于cheerio在转换汉字时会出现转为Unicode的情况,所以我们编写convert方法来保证最终转码正确
 * @param  {[String]} str e.g  &#x6210;&#x529F;
 * @return {[String]}     e.g  成功
 */
function convert(str) {
  str = str.replace(/(&#x)(\w{4});/gi, function($0) {
    return String.fromCharCode(parseInt(encodeURIComponent($0).replace(/(%26%23x)(\w{4})(%3B)/g, '$2'), 16))
  })
  return str
}

module.exports = {
	/** 区分打包环境与开发环境
	 * process.env.NODE_ENV==='production'  (打包环境)
	 * process.env.NODE_ENV==='development' (开发环境)
	 * baseUrl: process.env.NODE_ENV==='production'?"https://cdn.didabisai.com/front/":'front/',
	 */

	// 项目部署的基础路径
	// 我们默认假设你的应用将会部署在域名的根部,例如 https://www.my-app.com/
	// 如果你的应用部署在一个子路径下，那么你需要在这里指定子路径。比如将你的应用部署在https://www.foobar.com/my-app/那么将这个值改为 '/my-app/'
	baseUrl: './',

	// 构建好的文件输出到哪里
	outputDir: 'dist',

	// where to put static assets (js/css/img/font/...) 
  // 是否在保存时使用‘eslint-loader’进行检查 
  // 有效值: true | false | 'error' 
  // 当设置为‘error’时，检查出的错误会触发编译失败
	lintOnSave: true,

	// 使用带有浏览器内编译器的完整构建版本 
  // https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
	runtimeCompiler: false,

	// babel-loader默认会跳过`node_modules`依赖. 
  // 通过这个选项可以显示转译一个依赖
	transpileDependencies: [
		/* string or regex */
	],

	// 是否为生产环境构建生成sourceMap?
	productionSourceMap: true,

	pages: {
		index: {
			entry: './examples/main.js'
		}
	},

	// 调整内部的webpack配置.
	// see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
	chainWebpack: config => {
		if (debug) {
			// 开发环境配置
      config.devtool = 'cheap-module-eval-source-map'
    } else {
			// 生产环境配置
    }

    // markdown 处理
    config.module.rule('md')
      .test(/\.md/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-markdown-loader')
      .loader('vue-markdown-loader/lib/markdown-compiler')
      .options({
        // markdown-it config
        preset: 'default',
        breaks: true,
        raw: true,
        preprocess: function(MarkdownIt, source) {
          // 对于markdown中的table,
          MarkdownIt.renderer.rules.table_open = function() {
            return '<table class="table">';
          };
          // 对于代码块去除v-pre,添加高亮样式
          MarkdownIt.renderer.rules.fence = wrap(MarkdownIt.renderer.rules.fence)
          return source;
        },
        use: [
          [require('markdown-it-anchor'), {
            // 添加超链接锚点的最小标题级别, 如: #标题 不会添加锚点
            level: 2,
            // 自定义slugify, 我们使用的是将中文转为汉语拼音,最终生成为标题id属性
            slugify: slugify,
            // 开启标题锚点功能
            permalink: true,
            // 在标题前创建锚点
            permalinkBefore: true
          }],
          // 'markdown-it-container'的作用是自定义代码块
          [require('markdown-it-container'), 'demo', {
            // 当我们写::: demo :::这样的语法时才会进入自定义渲染方法
            validate: function(params) {
              return params.trim().match(/^demo\s*(.*)$/)
            },
            // 自定义渲染方法,这里为核心代码
            render: function(tokens, idx) {
              var m = tokens[idx].info.trim().match(/^demo\s*(.*)$/)
              // nesting === 1表示标签开始
              if (tokens[idx].nesting === 1) {
                // 获取正则捕获组中的描述内容,即::: demo xxx中的xxx
                var description = (m && m.length > 1) ? m[1] : ''
                // 获得内容
                var content = tokens[idx + 1].content
                // 解析过滤解码生成html字符串
                var html = convert(striptags.strip(content, ['script', 'style'])).replace(/(<[^>]*)=""(?=.*>)/g, '$1')
                // 获取script中的内容
                var script = striptags.fetch(content, 'script')
                // console.log(script);
                // 获取style中的内容
                var style = striptags.fetch(content, 'style')
                // 组合成prop参数,准备传入组件
                var jsfiddle = { html: html, script: script, style: style }
                // 是否有描述需要渲染
                var descriptionHTML = description
                  ? md.render(description)
                  : ''
                // 将jsfiddle对象转换为字符串,并将特殊字符转为转义序列
                jsfiddle = md.utils.escapeHtml(JSON.stringify(jsfiddle))
                // 起始标签,写入demo-block模板开头,并传入参数
                return `<demo-block class="demo-box" :jsfiddle="${jsfiddle}">
                          <div class="source" slot="source">${html}</div>
                          ${descriptionHTML}
                          <div class="highlight" slot="highlight">`
              }
              // 否则闭合标签
              return '</div></demo-block>\n'
            }
          }],
          [require('markdown-it-container'), 'tip'],
          [require('markdown-it-container'), 'warning']
        ]
      })
	},

	// configureWebpack: config  => {
	// 	if (debug) {
  //     // 本地开发配置
  //   } else {
  //     // 生产开发配置
  //   }
  // },

	configureWebpack: {
    // module: {
      // rules: [
        // {
        //   test: /\.md$/,
        //   loader: 'vue-markdown-loader',
        //   options: {
        //     preset: 'default',
        //     breaks: true,
        //     preventExtract: true
        //   }
        // }
        // {
        //   test: /\.md$/,
        //   loader: 'vue-markdown-loader',
        //   options: {
        //     use: [
        //       [require('markdown-it-anchor'), {
        //         level: 2,
        //         slugify: slugify,
        //         permalink: true,
        //         permalinkBefore: true
        //       }],
        //       // 'markdown-it-container'的作用是自定义代码块
        //       [require('markdown-it-container'), 'demo', {
        //         // 当我们写::: demo :::这样的语法时才会进入自定义渲染方法
        //         validate: function(params) {
        //           return params.trim().match(/^demo\s*(.*)$/)
        //         },
        //         // 自定义渲染方法,这里为核心代码
        //         render: function(tokens, idx) {
        //           var m = tokens[idx].info.trim().match(/^demo\s*(.*)$/)
        //           // nesting === 1表示标签开始
        //           if (tokens[idx].nesting === 1) {
        //             // 获取正则捕获组中的描述内容,即::: demo xxx中的xxx
        //             var description = (m && m.length > 1) ? m[1] : ''
        //             // 获得内容
        //             var content = tokens[idx + 1].content
        //             // 解析过滤解码生成html字符串
        //             var html = convert(striptags.strip(content, ['script', 'style'])).replace(/(<[^>]*)=""(?=.*>)/g, '$1')
        //             // 获取script中的内容
        //             var script = striptags.fetch(content, 'script')
        //             // 获取style中的内容
        //             var style = striptags.fetch(content, 'style')
        //             // 组合成prop参数,准备传入组件
        //             var jsfiddle = { html: html, script: script, style: style }
        //             // 是否有描述需要渲染
        //             var descriptionHTML = description
        //               ? md.render(description)
        //               : ''
        //             // 将jsfiddle对象转换为字符串,并将特殊字符转为转义序列
        //             jsfiddle = md.utils.escapeHtml(JSON.stringify(jsfiddle))
        //             // 起始标签,写入demo-block模板开头,并传入参数
        //             return `<demo-block class="demo-box" :jsfiddle="${jsfiddle}">
        //                       <div class="source" slot="source">${html}</div>
        //                       ${descriptionHTML}
        //                       <div class="highlight" slot="highlight">`
        //           }
        //           // 否则闭合标签
        //           return '</div></demo-block>\n'
        //         }
        //       }],
        //       [require('markdown-it-container'), 'tip'],
        //       [require('markdown-it-container'), 'warning']
        //     ],
        //     // 定义处理规则
        //     preprocess: function(MarkdownIt, source) {
        //       // 对于markdown中的table,
        //       MarkdownIt.renderer.rules.table_open = function() {
        //         return '<table class="table">';
        //       };
        //       // 对于代码块去除v-pre,添加高亮样式
        //       MarkdownIt.renderer.rules.fence = wrap(MarkdownIt.renderer.rules.fence)
        //       return source;
        //     }
        //   }
        // }
      // ]
    // }
	},

	// CSS 相关选项
	css: {
		// 将组件内部的css提取到一个单独的css文件（只用在生产环境）
		// 也可以是传递给 extract-text-webpack-plugin 的选项对象
		extract: true,
		// 允许生成 CSS source maps?
		sourceMap: false,
		// pass custom options to pre-processor loaders. e.g. to pass options to // sass-loader, use { sass: { ... } }
		loaderOptions: {},
		// Enable CSS modules for all css / pre-processor files. // This option does not affect *.vue files.
		modules: false
	},

	// use thread-loader for babel & TS in production build // enabled by default if the machine has more than 1 cores
	parallel: require('os').cpus().length > 1,

	// PWA 插件相关配置 // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
	pwa: {}, // configure webpack-dev-server behavior

	devServer: {
		open: process.platform === 'darwin',
		disableHostCheck: false,
		host: '0.0.0.0',
		port: 8088,
		https: false,
		hotOnly: false, // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#configuring-proxy
		proxy: null // string | Object
		// before: app => {}
	}, // 第三方插件配置

	pluginOptions: {
		// ...
	}
}
