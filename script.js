$(document).ready(function(){
  $('button').on('click', function(e){
    var valid = validate();
    if( valid ){
      e.preventDefault();
      $('form').html("<h1>Welcome Message, Bro</h1>"); //prevent the default action
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