const environment = {
    NODE_PORT: process.env.NOMAD_PORT_http || '8080',
};

module.exports = environment;
