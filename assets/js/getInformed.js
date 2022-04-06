console.log("beep boop link established 🤖️");

var currentDate = moment().format("YYYY-MM-DD");

var apiKey = "5dff9d1b5af740dab33ec03db22e27f7";

var todayNewsAPI = "https://newsapi.org/v2/top-headlines?q=ukraine&from="+currentDate+"&to=&"+currentDate+"&language=en&apiKey=";

var todaySection = $("#today-section");

console.log(currentDate);

console.log(todayNewsAPI+apiKey);

var emptyArray = [];
// For loop, for every object in the JSON response, add to the array first, then create a card then append that card to the page

function getNewsToday(){
  $.ajax({
    url: todayNewsAPI+apiKey,
    method: "GET",
  }).then(function (response) { 
      //Within this function, we will need to write the code to populate cards in the getInformed.html file
      console.log(response);
      for (var i = 0; i < 8; i++) {
          var articleTitle = response.articles[i].title;
          var articleDesc = response.articles[i].description;
          var articleURL = response.articles[i].url;
          console.log(articleTitle, "\n", articleDesc, "\n", articleURL);

          var card = $("<div>").addClass("card mb-3");
          var cardImg = $("<img>").addClass("card-img-top");
          var cardBody = $("<div>").addClass("card-body");
          var cardTitle = $("<h5>").addClass("card-title");
          var cardText = $("<p>").addClass("card-text");

      }
  });
}

// todaySection.append("Test");

var userName = document.getElementById("userName");
var userEmail = document.getElementById("userEmail");
var submit = document.getElementById("submitBtn");

submit.addEventListener("click", function(event) {
    event.preventDefault();
  
  userName
  userEmail 
  
    if (userName === "") {
      displayMessage("error", "Name cannot be blank");
    } else if (userEmail === "") {
      displayMessage("error", "Email cannot be blank");
    } else {
      displayMessage("success", "Registered successfully");
  
      localStorage.setItem("UserName", userName);
      localStorage.setItem("UserEmail", userEmail);
    }
});
 

