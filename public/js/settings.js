$(document).ready(function () {
  $.get("/api/user_data").then(function (data) {
    $(".member-name").text(data.email.split("@")[0]);
  });

  function updateWantsEmail() {
    $.ajax({
      url: "/api/signuph",
      method: "PUT",
      data: "",
    }).then(alert("update captured"));
  }

  $("#wantsEmail").on("click", updateWantsEmail());
});
