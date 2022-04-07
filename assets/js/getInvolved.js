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
// =====Charity API============ 


// Global Variables
var appid = "1a7b6039";
var charityAPIKey= "9a567af1ee8ccc9fdbae8f7af7bd1947";


fetch(`https://api.data.charitynavigator.org/v2/Organizations?app_id=1a7b6039&app_key=9a567af1ee8ccc9fdbae8f7af7bd1947&search=Ukraine&rated=true&sort=rating%3ADESC`,{method:'GET'
}).then(function(response){
    return response.json();
}).then(function (data){

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

// ======== Submit button ==========
var submit = document.querySelector("#submitBtn")


submit.addEventListener("click", function(event) {
            event.preventDefault();
  var userName = document.getElementById("userName").value
  var userEmail = document.getElementById("userEmail").value
  var changeTxt = document.querySelector("#changeTxt").innerText = "Thanks!"
   localStorage.setItem("user name",userName)
   localStorage.setItem("user email",userEmail)

    
});

// ========== End of Submit Button===========
