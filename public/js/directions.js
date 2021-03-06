$(document).ready(function () {
  $.get("/api/posts").then(function (data) {
    $("#test").text(data);
  });
});
