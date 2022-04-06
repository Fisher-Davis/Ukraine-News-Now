console.log("beep boop link established 🤖️");

var currentDate = moment().format("YYYY-MM-DD");

var apiKey = "5dff9d1b5af740dab33ec03db22e27f7";

var newsURL = "https://newsapi.org/v2/top-headlines?q=ukraine&from="+currentDate+"&to=&"+currentDate+"language=en&apiKey=";

var todaySection = $("#today-section");


console.log(currentDate);

console.log(newsURL+apiKey);

$.ajax({
    url: newsURL+apiKey,
    method: "GET",
}).then(function (response) { 
    //Within this function, we will need to write the code to populate cards in the getInformed.html file
    console.log(response);
    for (var i = 0; i < 8; i++) {
        var articleTitle = response.articles[i].title;
        var articleDesc = response.articles[i].description;
        var articleURL = response.articles[i].url;
        console.log(articleTitle, "\n", articleDesc, "\n", articleURL);
    }
});

todaySection.append("Test");


var submit = document.getElementById("submitBtn");


submit.addEventListener("click", function(event) {
  event.preventDefault
  var userName = document.getElementById("userName").value
  var userEmail = document.getElementById("userEmail").value
   localStorage.setItem("user name",userName)
   localStorage.setItem("user email",userEmail)
  
    // if (userName === "") {
    //   displayMessage("error", "Name cannot be blank");
    // } else if (userEmail === "") {
    //   displayMessage("error", "Email cannot be blank");
    // } else {
    //   displayMessage("success", "Registered successfully");
  

    // }
});
 

