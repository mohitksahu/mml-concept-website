module.exports = {
    devServer: {
        // Use the new setupMiddlewares option instead of deprecated ones
        setupMiddlewares: (middlewares, devServer) => {
            // This replaces onBeforeSetupMiddleware and onAfterSetupMiddleware
            if (!devServer) {
                throw new Error('webpack-dev-server is not defined');
            }

            // Add any custom middleware here if needed
            // middlewares.unshift(...);

            return middlewares;
        },
        // Remove deprecated options that cause warnings
        onBeforeSetupMiddleware: undefined,
        onAfterSetupMiddleware: undefined,
    },
    webpack: {
        configure: (webpackConfig) => {
            // Suppress specific warnings
            if (!webpackConfig.ignoreWarnings) {
                webpackConfig.ignoreWarnings = [];
            }

            webpackConfig.ignoreWarnings.push(
                /DEP_WEBPACK_DEV_SERVER_ON_AFTER_SETUP_MIDDLEWARE/,
                /DEP_WEBPACK_DEV_SERVER_ON_BEFORE_SETUP_MIDDLEWARE/
            );

            return webpackConfig;
        },
    },
};
