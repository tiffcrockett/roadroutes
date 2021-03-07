$(document).ready(function () {
  function updateWantsEmail() {
    $.ajax({
      url: "/api/signuph",
      method: "PUT",
      data: "",
    }).then(alert("update captured"));
  }

  $("#wantsEmail").on("click", updateWantsEmail());
});
