var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "hotmail",
  auth: {
    user: "Road_Routes@outlook.com",
    pass: "fullstack123",
  },
});

var recipientList = ["jkriese12@gmail.com", "js.kriese@gmail.com"];

var mailOptions = {
  from: "Road_Routes@outlook.com",
  bcc: recipientList,
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

module.exports = nodemailer;
