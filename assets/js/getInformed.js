// Checking javascript file is linked properly
console.log("                                               ,w.");
console.log("                                             ,YWMMw  ,M  ,");
console.log("                        _.---.._   __..---._.'MMMMMw,wMWmW,");
console.log("                   _.-\"\"        \"\"\"           YP\"WMMMMMMMMMb,");
console.log("                .-' __.'                   .'     MMMMW^WMMMM;");
console.log("    _,        .'.-'\"\; `,       /`     .--\"\"      :MMM[==MWMW^;");
console.log(" ,mM^\"     ,-\'.\'   /   ;      ;      /   ,       MMMMb_wMW\"  @");
console.log(",MM:.    .'.-'   .'     ;     `\    ;     `,     MMMMMMMW `\"=./`-,");
console.log("WMMm__,-'.'     /      _.\      F\"\"\"-+,,   ;_,_.dMMMMMMMM[,_ / `=_}");
console.log("^MP__.-'    ,-' _.--\"\"   `-,   ;       \  ; ;MMMMMMMMMMW^``; __|");
console.log("           /   .'            ; ;         )  )`{  \\ `\"^W^`,   \  :");
console.log("          /  .'             /  (       .'  /     Ww._     `.  `\"");
console.log("        /  Y,              `,  `-,=,_{   ;      MMMP`\"\"-,  `-._.-,");
console.log("fsc     (--, )                `,_ / `) \\\/\"\")      ^\"      `-, -;\"\\:");
console.log(")         `\"\"\"                    `\"\"\"   `\"'                  `---\"");
console.log("beep boop link established 🤖️");

// Date variables
var todaySection = $("#today-section");
var lastWeekSection = $("#last-week-section")
var todayDateStamp = $("#today-date");
var lastWeekDateStamp = $("lw-date");
var currentDate = moment().format("YYYY-MM-DD");
var yesterday = moment().subtract(1,"days").format("YYYY-MM-DD");
var today = moment(currentDate).format("dddd");
var lastWeek = moment().format("w")-1;
var lastWeekDate = moment().day(today).week(lastWeek).format("YYYY-MM-DD");

// API variables
var apiKey = "5dff9d1b5af740dab33ec03db22e27f7";
var todayNewsAPI = "https://newsapi.org/v2/top-headlines?q=ukraine&from="+currentDate+"&to="+currentDate+"&language=en&sortBy=popularity&apiKey=";
var lastWeekNewsAPI = "https://newsapi.org/v2/everything?q=+ukraine&searchIn=title&from="+lastWeekDate+"&to="+yesterday+"&language=en&sortBy=publishedAt&apiKey=";

console.log(lastWeekDateStamp);

console.log(todayNewsAPI+apiKey);
console.log(lastWeekNewsAPI+apiKey);

getNewsToday();
getLastWeekNews();
displayDate();
displayLastWeekRange();

setInterval(function(){
  displayDate();
  console.log("Interval working: 10 seconds passed");
},10000);

function displayDate(){
  var todayDateTime = moment().format("dddd, MMMM Do YYYY, h:mm A");
  todayDateStamp.html(todayDateTime);
}

function displayLastWeekRange(){
  var lastWeekDateRange = moment(lastWeekDate).format("dddd, MMMM Do YYYY") + " to " + moment(yesterday).format("dddd, MMMM Do YYYY");
  console.log("Last week's news: " + lastWeekDateRange);
  lastWeekDateStamp.append("Last week's news: " + lastWeekDateRange);
}

function getNewsToday(){
  $.ajax({
    url: "https://corsbridge.herokuapp.com/https%3A%2F%2Fnewsapi.org%2Fv2%2Ftop-headlines%3Fq%3Dukraine%26from%3D2022-04-07%26to%3D2022-04-07%26language%3Den%26sortBy%3Dpopularity%26apiKey%3D5dff9d1b5af740dab33ec03db22e27f7",
    method: "GET",
  }).then(function (response) { 
      console.log(response);
      for (var i = 0; i < 6; i++) {
          var articleTitle = response.articles[i].title;
          var articleURL = response.articles[i].url;
          var articleImg = response.articles[i].urlToImage;

          var cardContainer = $("<div>").addClass("col-xl-4 col-xs-12 mb-5");
          var card = $("<div>").addClass("card newsCard");
          var cardImg = $("<img>").addClass("card-img-top").attr("src",articleImg);
          var cardBody = $("<div>").addClass("card-body");
          var cardTitle = $("<h5>").addClass("card-title").text(articleTitle);
          var cardText = $("<p>").addClass("card-text");
          var cardURL = $("<a>").addClass("stretched-link").attr("href",articleURL).attr("target","_blank");

          cardBody.append(cardTitle);
          cardBody.append(cardText);
          cardBody.append(cardURL);
          card.append(cardImg);
          card.append(cardBody);
          cardContainer.append(card);
          todaySection.append(cardContainer);
      }
  });
}

function getLastWeekNews(){
  $.ajax({
    url: "https://corsbridge.herokuapp.com/https%3A%2F%2Fnewsapi.org%2Fv2%2Feverything%3Fq%3D%2Bukraine%26searchIn%3Dtitle%26from%3D2022-03-31%26to%3D2022-04-06%26language%3Den%26sortBy%3DpublishedAt%26apiKey%3D5dff9d1b5af740dab33ec03db22e27f7",
    method: "GET",
  }).then(function (response) { 
      console.log(response);
      for (var i = 0; i < 12; i++) {
          var articleTitle = response.articles[i].title;
          var articleURL = response.articles[i].url;
          var articleImg = response.articles[i].urlToImage;

          var cardContainer = $("<div>").addClass("col-xl-3 col-xs-12 mb-3");
          var card = $("<div>").addClass("card newsCard");
          var cardImg = $("<img>").addClass("card-img-top").attr("src",articleImg);
          var cardBody = $("<div>").addClass("card-body");
          var cardTitle = $("<h5>").addClass("card-title").text(articleTitle);
          var cardText = $("<p>").addClass("card-text");
          var cardURL = $("<a>").addClass("stretched-link").attr("href",articleURL).attr("target","_blank");

          cardBody.append(cardTitle);
          cardBody.append(cardText);
          cardBody.append(cardURL);
          card.append(cardImg);
          card.append(cardBody);
          cardContainer.append(card);
          lastWeekSection.append(cardContainer);
      }
  });
}

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