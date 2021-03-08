$(document).ready(function () {
  $.get("/api/user_data").then(function (data) {
    $(".member-name").text(data.email.split("@")[0]);
  });

  const url = window.location.search;
  let authorId;
  if (url.indexOf("?author_id=") !== -1) {
    authorId = url.split("=")[1];
    getPosts(authorId);
  } else {
    getPosts();
  }
  // Need to add get route and rendering of all of the specific authors entries
  // Move over code from all-routes
});
