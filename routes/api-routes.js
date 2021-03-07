// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");
const nodemailer = require("nodemailer");

module.exports = function (app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id,
    });
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error

  //****************** GET ROUTES ****************** /

  // Route to retrieve all favorites on login
  app.get("/members", async function (req, res) {
    await db.sequelize
      .query(
        `SELECT * FROM routes 
    INNER JOIN favorites
    ON route.id = favorites.routeId
    INNER JOIN user 
    where user.id = ${req.user.id}`,
        { type: QueryTypes.SELECT }
      )
      .then((results) => {
        res.json(results);
      })
      .catch((err) => {
        res.status(401).json(err.message);
      });
  });

  // Route for logging user out
  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", (req, res) => {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id,
      });
    }
  });

  // GET route for viewing all information from the database
  app.get("/api/posts", function (req, res) {
    db.Routes.findAll({}).then(function (dbPost) {
      res.json(dbPost);
    });
  });

  // GET route to retrieve data for a specific ID in the database
  app.get("/api/posts/:state", function (req, res) {
    db.Routes.findAll({
      where: {
        routeState: req.params.state,
      },
    }).then(function (dbPost) {
      res.json(dbPost);
    });
  });

  // GET route to retrieve data for specific state AND city sorted by ascending distance
  app.get("/api/posts/locationAscending/:city/:state", function (req, res) {
    db.Routes.findAll({
      where: {
        routeCity: req.params.city,
        routeState: req.params.state,
      },
      order: [["routeDistance", "ASC"]],
    }).then(function (dbPost) {
      res.json(dbPost);
    });
  });
  // GET route to retrieve data for specific state AND city sorted by descending distance
  app.get("/api/posts/locationDescending/:city/:state", function (req, res) {
    db.Routes.findAll({
      where: {
        routeCity: req.params.city,
        routeState: req.params.state,
      },
      order: [["routeDistance", "DESC"]],
    }).then(function (dbPost) {
      res.json(dbPost);
    });
  });
  // GET route to find all cities that have been added to the database
  app.get("/api/city", function (req, res) {
    db.Routes.findAll({
      attributes: ["routeCity"],
    }).then(function (dbPost) {
      res.json(dbPost);
    });
  });
  // GET route to find all states that have been added to the database
  app.get("/api/state", function (req, res) {
    db.Routes.findAll({
      attributes: ["routeState"],
    }).then(function (dbPost) {
      res.json(dbPost);
    });
  });
  //****************** POST ROUTES ****************** /

  // POST route to send inputed user data to the server
  app.post("/api/posts/newRoute", function (req, res) {
    db.Routes.create({
      routeName: req.body.routeName,
      routeState: req.body.routeState,
      routeCity: req.body.routeCity,
      routeArea: req.body.routeArea,
      routeDistance: req.body.routeDistance,
      routeSteps: req.body.routeSteps,
    }).then(function (dbPost) {
      res.json(dbPost);
    });
  });
  // POST route for adding a route to favorites table
  app.post("/members/posts", function (req, res) {
    db.Favorites.create({
      routeId: req.body.routeId,
      userId: req.body.user.id,
      createdBy: req.user.id,
    })
      .then(function (results) {
        res.json(results);
      })
      .catch(function (err) {
        res.json(err);
      });
  });
  app.post("/api/signup", (req, res) => {
    db.User.create({
      email: req.body.email,
      password: req.body.password,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      city: req.body.city,
      state: req.body.state,
      zip: req.body.zip,
      wantsEmail: false,
    })
      .then(() => {
        res.redirect(307, "/api/login");
      })
      .catch((err) => {
        res.status(401).json(err.message);
      });
  });
  //****************** PUT ROUTES ****************** /
  app.put("/api/signuph", function (req, res) {
    db.User.update({
      wantsEmail: true,
    }).then(function (data) {
      res.json(data);
    });
  });
};
