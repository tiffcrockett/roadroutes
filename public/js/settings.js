// var db = require("../../models");
var nodemailer = require("nodemailer");

document.getElementById("emailYes").addEventListener("click", function () {
  alert("you did it");
});

// function findAllEmail() {
//   db.User.findAll({
//     attributes: ["email"],
//   }).then(function (data) {
//     var array = [];
//     for (var i = 0; i < data.length; i++) {
//       array.push(data[i].email);
//     }
//     var transporter = nodemailer.createTransport({
//       service: "hotmail",
//       auth: {
//         user: "Road_Routes@outlook.com",
//         pass: "fullstack123",
//       },
//     });

//     var mailOptions = {
//       from: "Road_Routes@outlook.com",
//       bcc: array,
//       subject: "Sending Email using Node.js",
//       text: "That was easy!",
//     };

//     transporter.sendMail(mailOptions, function (error, info) {
//       if (error) {
//         console.log(error);
//       } else {
//         console.log("Email sent: " + info.response);
//       }
//     });
//   });
// }
