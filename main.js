var message = $("<p></p>").text("Welcome, you are now logged in!");


$('form').on('submit', function(event) {
  event.preventDefault();
  $(this).hide();
  $('h1').after(message);
});