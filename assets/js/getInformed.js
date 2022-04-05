console.log("beep boop link established 🤖️")

var apiKey = "5dff9d1b5af740dab33ec03db22e27f7";

var newsURL = "https://newsapi.org/v2/top-headlines?q=ukraine&language=en&apiKey="

var todaySection = $("#today-section");

var currentDate = moment().format("YYYY-MM-DD");
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