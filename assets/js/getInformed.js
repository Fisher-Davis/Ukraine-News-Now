console.log("beep boop link established 🤖️")

var apiKey = "5dff9d1b5af740dab33ec03db22e27f7";

var newsURL = "https://newsapi.org/v2/top-headlines?country=us&apiKey="

console.log(newsURL+apiKey);

$.ajax({
    url: newsURL+apiKey,
    method: "GET",
}).then(function (response) {
    console.log(response);
});


var userName = document.getElementById("userName")
var userEmail = document.getElementById("userEmail")
var submit = document.getElementById("submitBtn")

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
 

