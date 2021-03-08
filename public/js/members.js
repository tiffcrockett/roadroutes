// const { json } = require("sequelize/types");
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded! 🚀");
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page 
  $.get("/api/user_data").then(function (data) {
    $(".member-name").text(data.email.split('@')[0]);
  });

  const favoritesContainer = document.querySelector(".favorites-container");
  // Variable to hold our posts
  let posts;
  const getPosts = (author) => {
    authorId = author || "";
    if (authorId) {
      authorId = `/?author_id=${authorId}`;
    }
    fetch(`/api/posts${authorId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        posts = data;
        console.log("Success in getting posts:", data);
        $("#hi").text(data[0].routeId);
      })
      .catch((error) => console.error("Error:", error));
  };
  // Get a route post from a specific author
  const url = window.location.search;
  let authorId;
  if (url.indexOf("?author_id=") !== -1) {
    authorId = url.split("=")[1];
    getPosts(authorId);
  } else {
    getPosts();
  }
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
  postCardContainer.css({
    "background-color": "#f8f9f9",
    "margin-bottom": "15px",
  });
  var postCardBody = $("<div>");
  postCardBody.addClass("card-body");
  postCardBody.css({
    "padding": "8px",
  }); 
  var postTitle = $("<h6>");
  var postCreatedBy = $("<small>");
  postCreatedBy.css({
    float:"right",
    color: "blue",
  })
  var postBody = $("<small>");
  var postCity = $("<small>");
  postCity.css({
    "margin-right":"4px",
  });
  var postState = $("<small>");
  postState.css({
    "margin-right": "12px",
  });
  var postDistance = $("<small>");
  postDistance.css ({
    "margin-right": "12px",
  })
  var postArea = $("<small>");
  // Save button to add to favorites
  var saveBtn = $("<button>");
  saveBtn.text("Save");
  saveBtn.addClass("save btn btn-success");
  saveBtn.css({
    "font-size": "small",
    'margin-top': "-45px",
    "padding": "3px",
    float: "right",
  }); 
  // Setting text values from DB to fill the containers
  postTitle.text(post.routeName + " ");
  postCreatedBy.text(post.createdBy);
  postBody.text(post.routeSteps);
  postCity.text(post.routeCity);
  postState.text(post.routeState);
  postDistance.text(post.routeDistance + " MI");
  postArea.text("Area: " + post.routeArea);  
  // Appending all items to display appropriately
  postCardBody.append(postTitle);
  postCardBody.append(postCreatedBy);
  postCardBody.append(saveBtn);
  postCardBody.append(postCity);
  postCardBody.append(postState);
  postCardBody.append(postDistance);
  postCardBody.append(postArea); 
  // postCardContainer.append(postCardHead);
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
