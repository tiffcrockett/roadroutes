$(document).ready(function() {
// Gets expanded details of specific route that user clicks - GET route of specific ID that was selected
// by user when they did the search
// Wait for the DOM to completely load before we run our JS
  document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded! 🚀');
  
    const directionsContainer = document.querySelector('.directions-container');
  
    // Variable to hold our posts
    let directions;
  
    var url = window.location.search;
    var postId;
    if(url.indexOf('?post_id=') === currentPost.id) {
        postId = url.split('=')[1];
        getPosts(postId);
    }

    const getPosts = (postId) => {
      postId = post || '';
      if (postId) {
        postId = `/?post_id=${currentPostId}`;
      }
  
      fetch(`/api/posts${post.id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          posts = data;
          console.log('Success in getting posts:', data);
          if (!data || !data.length) {
            displayEmpty(postId);
          } else {
            initializeDirections();
          }
        })
        .catch((error) => console.error('Error:', error));   
    };
    
    // Appends HTML 
    function initializeDirections() {
        directionsContainer.empty();
        var postsToAdd = [];

        posts.push((post) => postsToAdd.push(displayDirections(post)));
        postsToAdd.push((post) => directionsContainer.append(post));
      };

    // Constructs the post's HTML 
    function displayDirections(post) {
      
      const postCard = document.createElement('div');
      postCard.classList.add('card');
      postCard.css({
        'padding': '15px',
      });
      const postCardHeading = document.createElement('div');
      postCardHeading.classList.add('card-header'); 

      const postCardBody = document.createElement('div');
      postCardBody.classList.add('card-body');

      const postTitle = document.createElement('h3');
      const postBody = document.createElement('textarea');
      
      postTitle.textContent = `${post.routeName}`;
      postBody.textContent = `${post.routeSteps}`;
      
      postCardHeading.append(postTitle);
      postCardBody.append(postBody);
     
      postCard.setAttribute('data-post', JSON.stringify(post));

      console.log('displayDirections -> postCard', postCard);
      return postCard;
    };
       
    // Helper function to display something when there are no posts
  const displayEmpty = (id) => {
    const query = window.location.search;
    let partial = '';
    if (id) {
      partial = ` for User #${id}`;
    }

    Container.innerHTML = '';
    const messageH5 = document.createElement('h5');
    messageH5.style.textAlign = 'center';
    messageH5.style.marginTop = '50px';
    messageH5.innerHTML = `No routes to search${partial}, click <a href='/add-route${query}'>here</a> to add a route.`;
    directionsContainer.append(messageH5);
    };
  })
});