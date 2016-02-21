$(document).ready(function(){

  $("#login").on("click", function(){
    var email = $($("input")[0]).val();
    var password = $($("input")[1]).val();
    if(email && password && password.length > 6 && email.indexOf('@' )!== -1) {
      alert("welcome");
    }
  })

})
