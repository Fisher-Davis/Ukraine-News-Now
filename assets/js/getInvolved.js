// =====Charity API============ 


// Global Variables
var appid = "1a7b6039";
var charityAPIKey= "9a567af1ee8ccc9fdbae8f7af7bd1947";


fetch(`https://api.data.charitynavigator.org/v2/Organizations?app_id=1a7b6039&app_key=9a567af1ee8ccc9fdbae8f7af7bd1947&search=Ukraine`,{method:'GET'
}).then(function(response){
    return response.json();
}).then(function (data){
    console.log(data)
})

// ====== End Charity API