$(document).ready(function() {
  $('form').on('submit', function() {
    $('.welcomeMessage').fadeIn();
  });
});

var email = document.getElementById("email");
var password = document.getElementById("password");

var validateForm = function(event) {
  event.preventDefault();
  var pass = document.forms['myForm']['password'].value;
  if(pass.split("").length <= 6) {
    alert("Password must be longer than 6 characters");
  } else {
    email.value = "";
    password.value = "";
  }
}