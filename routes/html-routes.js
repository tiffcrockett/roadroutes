// Requiring path to so we can use relative routes to our HTML files
const path = require("path");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {
  app.get("/", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/login", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "../public/members.html"));
  });
  // ***************** ROUTES FOR HTML PAGES *****************

  // Directs to add-route HTML file
  app.get("/add-route", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/add-route.html"));
  });
  // Directs to all-routes HTML file
  app.get("/all-routes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/all-routes.html"));
  });
  // Directs to author HTML file
  app.get("/author", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/author.html"));
  });
  // Directs to directions HTML file
  app.get("/directions", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/directions.html"));
  });
  // Directs to the settings HTML file
  app.get("/add-route", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/settings.html"));
  });
};
