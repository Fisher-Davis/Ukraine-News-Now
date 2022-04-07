                                               ,w.
                                             ,YWMMw  ,M  ,
                        _.---.._   __..---._.'MMMMMw,wMWmW,
                   _.-""        """           YP"WMMMMMMMMMb,
                .-' __.'                   .'     MMMMW^WMMMM;
    _,        .'.-'"; `,       /`     .--""      :MMM[==MWMW^;
 ,mM^"     ,-'.'   /   ;      ;      /   ,       MMMMb_wMW"  @\
,MM:.    .'.-'   .'     ;     `\    ;     `,     MMMMMMMW `"=./`-,
WMMm__,-'.'     /      _.\      F"""-+,,   ;_,_.dMMMMMMMM[,_ / `=_}
"^MP__.-'    ,-' _.--""   `-,   ;       \  ; ;MMMMMMMMMMW^``; __|
           /   .'            ; ;         )  )`{  \ `"^W^`,   \  :
          /  .'             /  (       .'  /     Ww._     `.  `"
         /  Y,              `,  `-,=,_{   ;      MMMP`""-,  `-._.-,
fsc     (--, )                `,_ / `) \/"")      ^"      `-, -;"\:
         `"""                    `"""   `"'                  `---"


console.log("beep boop link established 🤖️");

var currentDate = moment().format("YYYY-MM-DD");

var apiKey = "5dff9d1b5af740dab33ec03db22e27f7";
var todayNewsAPI = "https://newsapi.org/v2/top-headlines?q=ukraine&from="+currentDate+"&to=&"+currentDate+"&language=en&apiKey=";

var todaySection = $("#today-section");
var dateStamp = $("#date-field");

getNewsToday();

displayDate();

setInterval(function(){
  displayDate();
  console.log("Interval working: 10 seconds passed");
},10000);

function displayDate(){
  var dateTime = moment().format("dddd, MMMM Do YYYY, h:mm A");
  dateStamp.html(dateTime);
}

function getNewsToday(){
  $.ajax({
    url: todayNewsAPI+apiKey,
    method: "GET",
  }).then(function (response) { 
      console.log(response);
      for (var i = 0; i < 6; i++) {
          var articleTitle = response.articles[i].title;
          var articleURL = response.articles[i].url;
          var articleImg = response.articles[i].urlToImage;

          var cardContainer = $("<div>").addClass("col-sm-4 mb-3");
          var card = $("<div>").addClass("card");
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
 

