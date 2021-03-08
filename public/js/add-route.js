$(document).ready(function () { 
  $.get("/api/user_data").then(function (data) {
    $(".member-name").text(data.email.split('@')[0]);
  });
  // Gets an optional query string from our url (i.e. ?post_id=23)
  var url = window.location.search;
  var postId;
  // Sets a flag for whether or not we're updating a post to be false initially
  var updating = false;

  // If we have this section in our url, we pull out the post id from the url
  // In localhost:8080/cms?post_id=1, postId is 1
  if (url.indexOf("?post_id=") !== -1) {
    postId = url.split("=")[1];
    getPostData(postId);
  }

  //Jquery references to form information
  var routeTitleInput = $("#title");
  var routeDirectionsInput = $("#directions");
  var routeAreaInput = $("#area");
  var routeDistanceInput = $("#distance");
  var routeCityInput = $("#city");
  var routeStateInput = $("#state");
  var createdByInput = $('#createdBy')
  var formSubmitInput = $("#add-form");
  //Submitting form
  $(formSubmitInput).on("submit", function handleFormSubmit(event) {
    event.preventDefault();
    if (
      !routeTitleInput.val().trim() ||
      !routeDirectionsInput.val().trim() ||
      !routeAreaInput.val() ||
      !routeDistanceInput.val() ||
      !routeCityInput.val() ||
      !routeStateInput.val() ||
      !createdByInput.val()
    ) {
      return;
    }
    var newRoute = {
      routeName: routeTitleInput.val().trim(),
      routeSteps: JSON.stringify(routeDirectionsInput.val().trim()),
      routeArea: routeAreaInput.val(),
      routeDistance: routeDistanceInput.val(),
      routeCity: routeCityInput.val(),
      routeState: routeStateInput.val(),
      createdBy: createdByInput.val(),
    };

    console.log(newRoute);
    // sendEmail();
    submitPost(newRoute);
  });
  // Function to post to DB
  function submitPost(Post) {
    $.post("/api/posts/newRoute", Post, function () {
      window.location.href = "/all-routes";
    });
  }
  // Function to send email with nodemailer
  function sendEmail() {
    $.ajax({
      url: "/api/post/email",
      method: "POST",
      contentType: "application/json",
      success: function (response) {
        console.log(response);
      },
      fail: function (error) {
        console.log(error);
      },
    });
  }
});
