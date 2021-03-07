// Wait for the DOM to completely load before we run our JS
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded! 🚀");

  const allRoutesContainer = document.querySelector(".all-routes-container");

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
        if (!data || !data.length) {
          displayEmpty(author);
        } else {
          initializeRows();
        }
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

  // Create HTML rows for the all-routes container
  const initializeRows = () => {
    allRoutesContainer.innerHTML = "";
    const postsToAdd = [];

    posts.forEach((post) => postsToAdd.push(createNewRow(post)));
    postsToAdd.forEach((post) => allRoutesContainer.append(post));
  };

  const createNewRow = (post) => {
    console.log("createNewRow -> post", post);

<<<<<<< HEAD
    const newPostCard = document.createElement('div');
    newPostCard.classList.add('card');
    newPostCard.css({
      'background-color': '#f8f9f9',
      'margin-bottom': '20px',
    });

    // Save button
    const saveButton = document.createElement('button');
    saveButton.textContent = 'SAVE';
    saveButton.classList.add('save', 'btn', 'btn-success');
    saveButton.addEventListener('click', handlePostSave);

    const newPostTitle = document.createElement('h3');
    const newPostArea = document.createElement('small');
    const newPostDistance = document.createElement('small');
    const newPostCity = document.createElement('13px');
    const newPostState = doucment.createElement('13px');
    const newPostAuthor = document.createElement('13px');
=======
    const newPostCard = document.createElement("div");
    newPostCard.classList.add("card");

    // Save button
    // const saveButton = document.createElement("button");
    // editButton.textContent = "SAVE";
    // editButton.classList.add("save", "btn", "btn-success");
    // editButton.addEventListener("click", handlePostSave);

    const newPostTitle = document.createElement("h3");
    const newPostArea = document.createElement("small");
    const newPostDistance = document.createElement("small");
    const newPostCity = document.createElement("13px");
    const newPostState = doucment.createElement("13px");
    const newPostAuthor = document.createElement("13px");
>>>>>>> dev

    newPostAuthor.textContent = `Written by: ${post.Author.name}`;
    newPostAuthor.style.float = "right";
    newPostAuthor.style.color = "blue";
    newPostAuthor.style.marginTop = "-10px";

    newPostTitle.textContent = `${post.routeName}`;
    newPostArea.textContent = `${post.routeArea.selected}`;
    newPostDistance.textContent = `${post.routeDistance.selected} mi`;
    newPostCity.textContent = `${post.routeCity.selected}`;
    newPostState.textContent = `${post.routeState.selected}`;

    newPostCard.append(saveButton);
    newPostCard.append(newPostTitle);
    newPostCard.append(newPostArea);
    newPostCard.append(newPostDistance);
    newPostCard.append(newPostCity);
    newPostCard.append(newPostState);
    newPostCard.append(newPostAuthor);
    newPostCard.setAttribute("data-post", JSON.stringify(post));

    console.log("createNewRow -> newPostCard", newPostCard);
    return newPostCard;
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
    messageH2.innerHTML = `No routes to search${partial}, click <a href='/add-route${query}'>here</a> to add a route.`;
    allRoutesContainer.append(messageH2);
  }; 

  // Click event on route title and function to view directions
  $('h3').on('click', viewDirections());

  function viewDirections() {
    var currentPost = $(this)
      .parent()
      .data('post');
      window.location.href = '/directions' + currentPost.id;
  };

});
