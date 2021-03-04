var db = require("../models");
var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "hotmail",
  auth: {
    user: "Road_Routes@outlook.com",
    pass: "fullstack123",
  },
});
db.findAll({});
var recipientList = ["jkriese12@gmail.com", "js.kriese@gmail.com"];

for (i = 0; i < recipientList.length; i++) {
  var mailOptions = {
    from: "Road_Routes@outlook.com",
    to: recipientList,
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
}
module.exports = nodemailer;
