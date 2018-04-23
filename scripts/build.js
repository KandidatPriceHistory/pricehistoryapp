const shell = require('shelljs');

shell.echo('Cleaning up old files...');
shell.exec('rimraf dist');
shell.mkdir('dist');
shell.mkdir('dist/server');
shell.mkdir('dist/client');
shell.echo('\nCompiling...');
shell.echo('[1/2]\twebpack/server.prod.js');
shell.exec('webpack --config webpack/server.prod.js --json > dist/stats.server.json');

shell.echo('[2/2]\twebpack/client.prod.js');
shell.exec('webpack --config webpack/client.prod.js --json > dist/stats.client.json');

shell.echo('\nCopying files...');
shell.cp('dist/stats.client.json', 'dist/client/stats.client.json');
shell.cp('src/server/server.js', 'dist/server');
shell.cp('-R', 'src/server/views', 'dist/server');

shell.echo('\nDone!');
