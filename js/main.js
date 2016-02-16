var newHeading = document.createElement('h1');
var loginMessage = 'Thank you for logging in!';

$(document).ready(function () {
  console.log('sanity check');
  $('#login-form').submit(function(event) {
    event.preventDefault();
    $('#login-form').remove();
    $('main').append(newHeading);
    $('h1').html(loginMessage);
  });
});
