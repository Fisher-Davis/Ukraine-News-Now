var submit = document.querySelector("#submitBtn")


submit.addEventListener("click", function(e) {
  e.preventDefault;
  var userName = document.getElementById("userName").value
  var userEmail = document.getElementById("userEmail").value
   localStorage.setItem("user name",userName)
   localStorage.setItem("user email",userEmail)
        
})      