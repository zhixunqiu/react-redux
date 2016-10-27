/**
 * @author: renmaomin
 * @date:   2015-11-16
 */

'use strict';

// load native modules
var http = require('http');
var path = require('path');
var fs = require('fs');
var ip = require('ip');

// load 3rd modules
var koa = require('koa');
var router = require('koa-router')();
var serve = require('koa-static');
var jsonp = require('koa-jsonp')
var colors = require('colors');
var rewrite = require('koa-rewrite');
var bodyParser = require('koa-bodyparser');

// load local modules
var pkg = require('../package.json');
var env = process.env.NODE_ENV;
console.log('env:', env);
var debug = !env || env === 'development';
console.log('debug:', debug);
var viewDir = debug ? '../src' : '../dist';

// load routes
var routes = require('./routes');

// network config
var port = 5000;

// init framework
var app = koa();

colors.setTheme({
    silly: 'rainbow',
    input: 'grey',
    verbose: 'cyan',
    prompt: 'grey',
    info: 'green',
    data: 'grey',
    help: 'cyan',
    warn: 'yellow',
    debug: 'blue',
    error: 'red'
});

// basic settings
app.keys = [pkg.name, pkg.description];
app.proxy = true;

// global events listen
app.on('error', function(err, ctx) {
    err.url = err.url || ctx.request.url;
    console.error(err, ctx);
});

// handle favicon.ico
app.use(function*(next) {
    if (this.url.match(/favicon\.ico$/)) this.body = '';
    yield next;
});

// logger
app.use(function*(next) {
    console.log(this.method.info, this.url);
    yield next;
});

//后端放开路由，由前端处理
// fs.readdirSync(path.resolve(__dirname, viewDir)).forEach(function (file) {
//   if (!fs.statSync(path.join(path.resolve(__dirname, viewDir), file)).isDirectory()){
//     console.log('init ',file);
//     app.use(rewrite('/' + file + '/*', '/' + file ))
//   } 
// })

//json
app.use(jsonp());

// bodyParser
app.use(bodyParser());

// use routes
routes(router, app);
app.use(router.routes());

if (debug) {
    var webpackDevMiddleware = require('koa-webpack-dev-middleware');
    var webpack = require('webpack');
    var webpackDevConf = require('../webpack.config.dev');

    app.use(webpackDevMiddleware(webpack(webpackDevConf), {
        contentBase: webpackDevConf.output.path,
        publicPath: webpackDevConf.output.publicPath,
        hot: true,
        // stats: webpackDevConf.devServer.stats
        stats: {
            cached: false,
            colors: true
        }
    }));
}

// handle static files
app.use(serve(path.resolve(__dirname, viewDir), {
    maxage: 0
}));

app = http.createServer(app.callback());

app.listen(port, ip.address(), function() {
    console.log('Server listening on http://' + ip.address() + ':' + port + ', Ctrl+C to stop')
});