// const { json } = require("sequelize/types");
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded! 🚀");
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page

  $.get("/members").then(function (data) {
    createRows();
  });

  const favoritesContainer = document.querySelector(".favorites-container");

  //Function to retrieve saved routes
  let favs;
  function getFavs() {
    fetch(`/members`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        favs = data;
      })
      .catch((error) => console.error("Error:", error));
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
});
