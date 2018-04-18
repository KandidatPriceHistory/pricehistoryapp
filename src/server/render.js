import { getAssets } from './assets';

const render = ({ clientStats }) => (req, res) => {
    const { scripts, stylesheets } = getAssets(clientStats);
    res.render('index', {
        scriptSources: scripts,
        styleSources: stylesheets,
        publicPath: clientStats.publicPath
    });
};

export default render;
