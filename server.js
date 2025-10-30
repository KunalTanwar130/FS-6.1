const express = require("express");
const logger = require("./middleware/logger");
const auth = require("./middleware/auth");

const app = express();

// Apply logging middleware globally
app.use(logger);

// Public route
app.get("/public", (req, res) => {
  res.status(200).send("This is a public route. No authentication required.");
});

// Protected route
app.get("/protected", auth, (req, res) => {
  res.status(200).send("You have accessed a protected route with a valid Bearer token!");
});

// Start server
app.listen(3000, () => {
  console.log("🚀 Server running on http://localhost:3000");
});
