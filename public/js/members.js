// const { json } = require("sequelize/types");
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded! 🚀");
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function (data) {
    $(".member-name").text(data.email.split("@")[0]);
  });
  const favoritesContainer = document.querySelector(".favorites-container");

  // Variable to hold our posts
  let posts;
  const getPosts = (author) => {
    authorId = author || "";
    if (authorId) {
      authorId = `/?author_id=${authorId}`;
    }
    fetch(`/members/posts${req.user.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())``
      .then((data) => {
        posts = data;
        console.log("Success in getting favorites:", data);
        $("#hi").text(data[0].routeId);
      })
      .catch((error) => console.error("Error:", error));
  };


  // Helper function to display something when there are no posts
  const displayEmpty = (id) => {
    const query = window.location.search;
    let partial = "";
    if (id) {
      partial = ` for User #${id}`;
    }
    Container.innerHTML = "";
    const messageH2 = document.createElement("h4");
    messageH2.style.textAlign = "center";
    messageH2.style.marginTop = "50px";
    messageH2.innerHTML = `No saved routes yet${partial}, click <a href='/all-routes${query}'>here</a> to search routes.`;
    allRoutesContainer.append(messageH2);
  };
});

// Show saved routes that the user has elected to save
// Rendering routes would be the same from all-routes just with a different get request
function createRows(post) {
  // Creating main card container to hold all of the post information
  var postCardContainer = $("<div>");
  postCardContainer.addClass("card");
  // Card header attache to main post card
  var postCardHead = $("<div>");
  postCardHead.addClass("card-header");
  // Title, directional and route step text containing elements
  var postTitle = $("<h3>");
  var postCardBody = $("<div>");
  postCardBody.addClass("card-body");
  var postBody = $("<p>");
  var postCity = $("<p>");
  var postState = $("<p>");
  var postDistance = $("<small>");
  var postArea = $("<small>");
  // Save button to add to favorites
  var saveBtn = $("<button>");
  saveBtn.text("Save to favorites");
  saveBtn.addClass("save btn btn-success");
  // Setting text values from DB to fill the containers
  postTitle.text(post.routeName + " ");
  postBody.text(post.routeSteps);
  postCity.text(post.routeCity);
  postState.text(post.routeState);
  postDistance.text(post.routeDistance);
  postArea.text(post.routeArea);
  // Appending all items to display appropriately
  postCardHead.append(postTitle);
  postCardHead.append(saveBtn);
  postCardHead.append(postCity);
  postCardHead.append(postState);
  postCardHead.append(postDistance);
  postCardHead.append(postArea);
  postCardBody.append(postBody);
  postCardContainer.append(postCardHead);
  postCardContainer.append(postCardBody);
  postCardContainer.data("post", post);
  return postCardContainer;
}

// This function is used to display the information that is grabbed from the GET request
function displayRows() {
  // Clearing post container to make sure there is not duplicate data being generated
  postContainer.empty();
  //Empty array to add post data
  var postArray = [];
  for (var i = 0; i < posts.length; i++) {
    postArray.push(createRows(posts[i]));
  }
  postContainer.append(postArray);
}
