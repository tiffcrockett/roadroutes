// Requiring necessary npm packages
const nodemailer = require("nodemailer");
const express = require("express");
const session = require("express-session");
// Requiring passport as we've configured it
const passport = require("./config/passport");
//JS file required for nodemail

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 8080;
const db = require("./models");

// Creating express app and configuring middleware needed for authentication
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Requiring our routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

// EMAIL SENDING USING NODEMAILER
const transporter = nodemailer.createTransport({
  service: "hotmail",
  auth: {
    user: "roadroutes_bootcamp@outlook.com",
    pass: "fullstack123",
  },
});

function sendEmail(mail) {
  var mailOptions = {
    from: "roadroutes_bootcamp@outlook.com",
    bcc: mail.bcc,
    subject: mail.subject,
    text: mail.text,
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}
app.post("/api/post/email", function (req, res) {
  db.User.findAll({
    attributes: ["email"],
  }).then(function (data) {
    var emailList = [];
    for (var i = 0; i < data.length; i++) {
      emailList.push(data[i].email);
    }
    var mail = {
      bcc: emailList,
      subject: "A new route has been posted!",
      text:
        "A user has posted a new route online. Head over to Road Routes and check it out!",
    };
    console.log(mail);
    sendEmail(mail);
  });
});

// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
