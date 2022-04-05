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