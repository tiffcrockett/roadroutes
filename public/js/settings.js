$(document).ready(function () {
  $("#submitBtn").on("click", function () {
    var email = {
      wantsEmail: true,
    };
    $.ajax("/api/signup", {
      type: "PUT",
      data: email,
    }).then(function () {
      location.reload;
    });
  });
});
