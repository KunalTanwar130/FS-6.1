// Logs each incoming request with method, URL, and timestamp
function logger(req, res, next) {
  const currentTime = new Date().toISOString();
  console.log(`[${currentTime}] ${req.method} ${req.originalUrl}`);
  next();
}

module.exports = logger;
