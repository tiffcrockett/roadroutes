const url = window.location.search;
  let authorId;
  if (url.indexOf('?author_id=') !== -1) {
    authorId = url.split('=')[1];
    getPosts(authorId);
  } else {
    getPosts();
  }


