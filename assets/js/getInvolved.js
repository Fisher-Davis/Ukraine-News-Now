
                 __,__
                 .--.  .-"     "-.  .--.
                / .. \/  .-. .-.  \/ .. \
               | |  '|  /   Y   \  |'  | |
               | \   \  \ 0 | 0 /  /   / |
                \ '- ,\.-"`` ``"-./, -' /
                 `'-' /_   ^ ^   _\ '-'`
                 .--'|  \._ _ _./  |'--. 
               /`    \   \.-.  /   /    `\
              /       '._/  |-' _.'       \
             /          ;  /--~'   |       \
            /        .'\|.-\--.     \       \
           /   .'-. /.-.;\  |\|'~'-.|\       \
           \       `-./`|_\_/ `     `\'.      \
            '.      ;     ___)        '.`;    /
              '-.,_ ;     ___)          \/   /
               \   ``'------'\       \   `  /
                '.    \       '.      |   ;/_
              ___>     '.       \_ _ _/   ,  '--.
            .'   '.   .-~~~~~-. /     |--'`~~-.  \
           // / .---'/  .-~~-._/ / / /---..__.'  /
          ((_(_/    /  /      (_(_(_(---.__    .'
                    | |     _              `~~`
                    | |     \'.
                     \ '....' |
                      '.,___.'


// =====Charity API============ 


// Global Variables
var appid = "1a7b6039";
var charityAPIKey= "9a567af1ee8ccc9fdbae8f7af7bd1947";


fetch(`https://api.data.charitynavigator.org/v2/Organizations?app_id=1a7b6039&app_key=9a567af1ee8ccc9fdbae8f7af7bd1947&search=Ukraine&rated=true&sort=rating%3ADESC`,{method:'GET'
}).then(function(response){
    return response.json();
}).then(function (data){
    console.log(data)
    var forecastArr=document.getElementsByName('groupOfCards')
    
    console.log(groupOfCards.children[0].children[0].children[0])

    for(var i= 0; i<12; i++){
        // #groupOfCards
        var charityName= data[i].charityName
        var tagLine= data[i].tagLine
        var websiteURL = data[i].websiteURL
        // assign above content to individual cards
        // assign content
        groupOfCards.children[i].children[0].children[0].textContent=data[i].charityName
        groupOfCards.children[i].children[0].children[1].textContent=data[i].tagLine
        groupOfCards.children[i].children[0].children[2].setAttribute('href',data[i].websiteURL)
    }
})
// ====== End Charity API
var submit = document.querySelector("#submitBtn")


submit.addEventListener("click", function(e) {
  e.preventDefault;
  var userName = document.getElementById("userName").value
  var userEmail = document.getElementById("userEmail").value
   localStorage.setItem("user name",userName)
   localStorage.setItem("user email",userEmail)
});

