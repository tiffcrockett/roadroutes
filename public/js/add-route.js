  // Wait for the DOM to completely load before we run our JS
  document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded! 🚀');
  
    // Get references to form
    const routeName = document.getElementById('title');
    const routeSteps = document.getElementById('directions');
    const addForm = document.getElementById('add-form');
    const routeArea = document.getElementById('area');
    const routeDistance = document.getElementById('distance');
    const routeCity = document.getElementById('city');
    const routeState = document.getElementById('state');
    const routeAuthor = document.getElementById('author');
  
    // Get query parameter
    const url = window.location.search;
    let postId;
    let updating = false;
  
    // Get post data for editing/adding
    const getPostData = (id, type) => {
      const queryUrl =
        type === 'post' ? `/api/posts/${id}` : `/api/authors/${id}`;
  
      fetch(queryUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data) {
            console.log('Success in getting post:', data);
  
            // Populate the form for editing
            routeName.value = data.title;
            routeSteps.value = data.directions;
            routeArea.value = data.selected;
            routeDistance.value = data.selected;
            routeCity.value = data.selected;
            routeState.value = data.selected;
            routeAuthor.value = data.author;
            userId = data.UserId || data.id;
  
            // We are updating
            updating = true;
          }
        })
        .catch((err) => console.error(err));
    };
  
    // If post exists, grab the content of the post
    if (url.indexOf('?post_id=') !== -1) {
      postId = url.split('=')[1];
      getPostData(postId, 'post');
    }
    // Otherwise if we have an author_id in our url, preset the author select box to be our Author
    else if (url.indexOf('?author_id=') !== -1) {
      authorId = url.split('=')[1];
    }
  
    // Event handler for when the post for is submitted
    const handleFormSubmit = (e) => {
      e.preventDefault();
  
      // Make sure the form isn't empty
      if (
        !routeName.value.trim() ||
        !routeSteps.value.trim() ||
        !routeAreaSelect.value ||
        !routeDistanceSelect.value ||
        !routeCitySelect.value ||
        !routeStateSelect.value ||
        !routeAuthor.value.trim() || 
       ) {
        return;
      }
  
      // Object that will be sent to the db
      const newPost = {
        routeName: routeName.value.trim(),
        routeSteps: routeSteps.value.trim(),
        routeArea: routeAreaSelect.value,
        routeDistance: routeDistanceSelect.value,
        routeCity: routeCitySelect.value,
        routeState: routeStateSelect.value,
        routeAuthor: routeAuthor.value.trim(),
      };
  
      // Update a post if flag is true, otherwise submit a new one
      if (updating) {
        newPost.id = postId;
        updatePost(newPost);
      } else {
        submitPost(newPost);
      }
    };
  
    // Attach an event listener to the form on submit
    addForm.addEventListener('submit', handleFormSubmit);
  
    // Submits new post then redirects
    const submitPost = (post) => {
      fetch('/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(post),
      })
        .then(() => {
          window.location.href = '/all-routes';
        })
        .catch((err) => console.error(err));
    };
  
  
    // Update a post then redirect to all-routes
    const updatePost = (post) => {
      fetch('/api/posts', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(post),
      })
        .then(() => {
          window.location.href = '/all-routes';
        })
        .catch((err) => console.error(err));
    };
  });
  