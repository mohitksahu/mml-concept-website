/**
 * Simplified request logger middleware - passing through silently
 */
const logger = (req, res, next) => {
  // No logging, just pass the request through
  next();
};

module.exports = logger;
