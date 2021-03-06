$.get("/api/posts").then(function (data) {
  $("#hi").text(data);
});
