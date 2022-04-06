var submit = document.querySelector("#submitBtn")


submit.addEventListener("click", function(e) {
  e.preventDefault;
  var userName = document.getElementById("userName").value
  var userEmail = document.getElementById("userEmail").value
   localStorage.setItem("user name",userName)
   localStorage.setItem("user email",userEmail)
    
   if(userName ==="" + userEmail ==="") 
        alert("Both the First and Last Name, and Email must not be left blank.")
  else if(userName ==="")
        alert("The First and Last Name must not be left blank.")
   else(userEmail ==="") 
        alert("The Email field must not be left blank. ")    
  

})      