module.exports = {
    devServer: {
        port: 3000,
        setupMiddlewares: (middlewares, devServer) => {
            // Suppress specific console warnings
            if (!devServer) {
                throw new Error('webpack-dev-server is not defined');
            }

            // Original setup
            return middlewares;
        }
    },
    webpack: {
        configure: (webpackConfig, { env, paths }) => {
            // Suppress specific webpack warnings
            if (!webpackConfig.ignoreWarnings) {
                webpackConfig.ignoreWarnings = [];
            }

            webpackConfig.ignoreWarnings.push(
                /Failed to parse source map/,
                /Critical dependency: the request of a dependency is an expression/,
                /Module not found: Error: Can't resolve/,
                /export .* \(imported as .*\) was not found/,
                /DEP_WEBPACK_DEV_SERVER_ON_AFTER_SETUP_MIDDLEWARE/,
                /DEP_WEBPACK_DEV_SERVER_ON_BEFORE_SETUP_MIDDLEWARE/
            );

            return webpackConfig;
        }
    },
    plugins: [
        {
            plugin: require('tailwindcss'),
            options: {}
        }
    ]
};
