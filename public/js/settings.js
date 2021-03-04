$(document).ready(function () {
  $("input[type=radio]").click(function () {
    if (this.value === "1") {
      $.post("/api/email", {
        email: true,
      });
    } else [alert("noo")];
  });
});
