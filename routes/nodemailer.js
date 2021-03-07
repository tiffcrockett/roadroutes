var nodemailer = require("nodemailer");
var db = require("../models");

function findAllEmail() {
  db.User.findAll({
    attributes: ["email"],
  }).then(function (data) {
    var array = [];
    for (var i = 0; i < data.length; i++) {
      array.push(data[i].email);
    }
    var transporter = nodemailer.createTransport({
      service: "hotmail",
      auth: {
        user: "roadroutes_bootcamp@outlook.com",
        pass: "fullstack123",
      },
    });

    var mailOptions = {
      from: "roadroutes_bootcamp@outlook.com",
      bcc: array,
      subject: "Sending Email using Node.js",
      text: "That was easy!",
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  });
}
findAllEmail();

module.exports = nodemailer;
