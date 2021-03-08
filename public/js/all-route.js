$(document).ready(function () {  

  $.get("/api/user_data").then(function (data) {
    $(".member-name").text(data.email.split("@")[0]);
  });

  // All route container to hold all of our posts, cities and states
  var postContainer = $(".all-routes-container");
  var cityDropDown = $("#dbCity");
  var stateDropDown = $("#dbState");
  // Variable to hold all of the posts, cities and states in the DB
  var posts;
  var cities;
  var states;
  var searchCity;
  var searchState;
  //Ascending or Descending data storage
  var asc = $("#asc");
  var desc = $("desc");
  // Calling all posts to display on the screen on click
  var search = $("#srchbtn");
  $(search).on("click", function () {
    console.log(stateDropDown.val());
    console.log(cityDropDown);
    searchCity = cityDropDown.val();
    searchState = stateDropDown.val();
    getPosts(searchCity, searchState);
  });
  // Calling functions to display all cities and states in the DB and adding to the option drowdown
  getCities();
  getStates();
  // Function using GET route to grab all the information from the Routes table on the DB
  function getPosts(city, state) {
    if ($(asc).checked) {
      $.get("/api/posts/locationAscending/" + city + "/" + state, function (data) {
        console.log(data);
        posts = data;
        displayRows();
      });
    } else {
      $.get("/api/posts/locationDescending/" + city + "/" + state, function (data) {
        console.log(data);
        posts = data;
        displayRows();
      });
    }
  }
  // Function using get route to grab all cities that have been added to the DB
  function getCities() {
    $.get("/api/city", function (data) {
      console.log(data);
      cities = data;
      displayCities();
    });
  }
  // Function using get route to grab all states that have been added to the DB
  function getStates() {
    $.get("/api/state", function (data) {
      console.log(data);
      states = data;
      displayStates();
    });
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
  // Function used to display al cities in DB on the dropdown
  function displayCities() {
    // Empty array to add city data
    var cityArray = [];
    for (var i = 0; i < cities.length; i++) {
      cityArray.push(createCities(cities[i]));
    }
    cityDropDown.append(cityArray);
  }
  // Function used to display al states in DB on the dropdown
  function displayStates() {
    // Empty array to add city data
    var stateArray = [];
    for (var i = 0; i < states.length; i++) {
      stateArray.push(createStates(states[i]));
    }
    stateDropDown.append(stateArray);
  }
  // Function to dynamically generate the cities in the DB for the dropdown
  function createCities(cities) {
    if (cityDropDown.find("option#" + cities.routeCity).length === 0) {
      var option = $("<option>");
      option.attr("id", cities.routeCity);
      option.text(cities.routeCity);
      cityDropDown.append(option);
    }
  }
  // Function to dynamically generate the states in the DB for the dropdown
  function createStates(states) {
    if (stateDropDown.find("option#" + states.routeState).length === 0) {
      var option = $("<option>");
      option.attr("id", states.routeState);
      option.text(states.routeState);
      stateDropDown.append(option);
    }
  }
  // Function to dynamically generate the rows creating HTML elements
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
      "padding": "2px",
      "margin-top": "-31px",
      "margin-right": "4px",
      "float": "right",
      "position": "relative",
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
});