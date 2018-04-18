const Express = require('express');
const webpack = require('webpack');
const path = require('path');
const bodyParser = require('body-parser');

const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackHotServerMiddleware = require('webpack-hot-server-middleware');

const clientConfig = require('../../webpack/client.dev');
const serverConfig = require('../../webpack/server.dev');
const environment = require('./environment');


const publicPath = clientConfig.output.publicPath;
const clientOutputPath = clientConfig.output.path;
const serverOutputhPath = serverConfig.output.path;

const DEV = process.env.NODE_ENV === 'development';
const port = process.env.PORT || 8080;

const app = new Express();

let isBuilt = false;

function done() {
    if (!isBuilt) {
        app.listen(port, () => {
            isBuilt = true;
            console.log(`${new Date().toUTCString()} Node server is listening to port: ${port}`);
        });
    }
}

app.use(bodyParser.json());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

if (DEV) {
    console.log('Compiling with Webpack');
    const compiler = webpack([clientConfig, serverConfig]);
    const clientCompiler = compiler.compilers[0];
    const options = {
        publicPath,
        stats: { colors: true },
        serverSideRendering: false
    };
    app.use(webpackDevMiddleware(compiler, options));
    app.use(webpackHotMiddleware(clientCompiler));
    app.use(webpackHotServerMiddleware(compiler));

    app.use((req, res) => {
        res.send(res.locals.webpackStats.toJson());
    });

    compiler.plugin('done', done);
}
else {
    const clientStats = require(`${serverOutputhPath}/../stats.client.json`);
    const render = require(`${serverOutputhPath}/render.js`).default;
    app.use(publicPath, Express.static(clientOutputPath, { maxAge: '360d' }));
    app.use(render({ clientStats }));
    done();
}


function shutdown() {
    console.info('Graceful shutdown..');
    process.exit();
}

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
