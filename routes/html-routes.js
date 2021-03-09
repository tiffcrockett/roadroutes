// Requiring path to so we can use relative routes to our HTML files
const path = require("path");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {
  app.get("/", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    } else {
      res.sendFile(path.join(__dirname, "./signup.html"));
    }
  });

  app.get("/login", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    } else {
      res.sendFile(path.join(__dirname, "./login.html"));
    }
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "./members.html"));
  });

  // ***************** ROUTES FOR HTML PAGES *****************

  // Directs to add-route HTML file
  app.get("/add-route", (req, res) => {
    res.sendFile(path.join(__dirname, "./add-route.html"));
  });
  // Directs to all-routes HTML file
  app.get("/all-routes", (req, res) => {
    res.sendFile(path.join(__dirname, "./all-routes.html"));
  });
  // Directs to author HTML file
  app.get("/author", (req, res) => {
    res.sendFile(path.join(__dirname, "./author.html"));
  });
  // Directs to directions HTML file
  app.get("/directions", (req, res) => {
    res.sendFile(path.join(__dirname, "./directions.html"));
  });
  // Directs to the settings HTML file
  app.get("/settings", (req, res) => {
    res.sendFile(path.join(__dirname, "./settings.html"));
  });
  // Directs to the login HTML file
  app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "./settings.html"));
  });
};
