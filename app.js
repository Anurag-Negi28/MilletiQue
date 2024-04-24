const express = require("express");
const path = require("path");
const app = express();

// Set EJS as view engine
app.set("view engine", "ejs");

// Set views directory
app.set("views", path.join(__dirname, "views"));

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/views/login.ejs", (req, res) => {
  res.render("login");
});

app.get("/views/signup.ejs", (req, res) => {
  res.render("signup");
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
