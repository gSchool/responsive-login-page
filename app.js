$(document).ready(function(){

  formSubmit()
})


function formSubmit(){
  $('form').submit(function(event){
    event.preventDefault();
    let sixCharPassword = $('#user-password').val()
    if(sixCharPassword.length < 6 ){
      alert("your assword should be at least 6 characters long")
    }
    else{

      $('form').html('<p>thanks, we own you</p>')
    }
  })
}
