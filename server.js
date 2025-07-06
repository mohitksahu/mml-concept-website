// This is just a wrapper to run the server from the root directory
try {
  require('./server/server');
} catch (error) {
  console.error('Server startup failed:', error);
  process.exit(1);
}
