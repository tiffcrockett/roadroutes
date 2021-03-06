// const { json } = require("sequelize/types");

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded! 🚀");

  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function (data) {
    $(".member-name").text(data.email);
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


      // Container.innerHTML = '';
      // const messageH2 = document.createElement('h4');
      // messageH2.style.textAlign = 'center';
      // messageH2.style.marginTop = '50px';
      // messageH2.innerHTML = `No saved routes yet${partial}, click <a href='/all-routes${query}'>here</a> to search routes.`;
      // allRoutesContainer.append(messageH2);

  };
});
