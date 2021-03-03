var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "hotmail",
  auth: {
    user: "Road_Routes@outlook.com",
    pass: "fullstack123",
  },
});

var mailOptions = {
  from: "Road_Routes@outlook.com",
  to: "jkriese12@gmail.com",
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
