// eslint-disable-next-line no-undef
module.exports = {
    images: {
        domains: ['courses-top.ru'],
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            issuer: [
                // test: /\.(js|ts)x?$/,
                // for webpack 5 use
                { and: [/\.(js|ts)x?$/] }
            ],
            use: ['@svgr/webpack'],
        });

        return config;
    },
};