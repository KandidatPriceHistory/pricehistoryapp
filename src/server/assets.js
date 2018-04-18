const jsReg = /\.js(\?v=\w*)*$/;
const cssReg = /\.css(\?=\w*)*$/;

export function getAssets(stats) {
    return {
        scripts: getAssetOfType('js', stats),
        stylesheets: getAssetOfType('css', stats)
    };
}

function getAssetOfType(type, stats) {
    const reg = type === 'js' ? jsReg : cssReg;
    const vendorAssets = getAssetsForKey('vendor', stats, reg);
    const mainAssets = getAssetsForKey('main', stats, reg);

    if (type === 'js') {
        return vendorAssets.concat(mainAssets);
    }
    else {
        return vendorAssets.concat(mainAssets);
    }
}

function getAssetsForKey(key, stats, reg) {
    let assets = [];
    if (stats.assetsByChunkName && stats.assetsByChunkName[key]) {
        const files = stats.assetsByChunkName[key];

        if (typeof(files) === 'string') {
            assets = reg.test(files) ? [files] : [];
        }
        else if (files.filter) {
            assets = files.filter(asset => reg.test(asset));
        }
    }

    return assets;
}
