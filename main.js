var email = document.getElementById("email");
var password = document.getElementById("password");

var validateForm = function(event) {
  event.preventDefault();
  var pass = document.forms['myForm']['password'].value;
  if(pass.split("").length <= 6) {
    alert("Password must be longer than 6 characters");
  } else {
    alert("Thanks for logging in!");
    email.value = "";
    password.value = "";
  }
}