$(document).ready(function(){
  
  $('button').on('click', function(el){
    el.preventDefault();
    $('#email').val("");
    $('#password').val("");
    alert('Thanks for Logging in Person!');
  });

});