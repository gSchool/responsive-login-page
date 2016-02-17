$(document).ready(function(){
  $('button').on('click', function(e){
    var valid = validate();
    if( valid ){
      e.preventDefault();
      var $welcome = ("<h1>Welcome Message, Bro</h1>");
      $('form').html($welcome); //prevent the default action
    }

  })
})

function validate(){
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if (email.includes("@") && password.length > 6) {
    return true;
  } else {
    return false;
  }
}