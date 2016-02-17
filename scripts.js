$('button').click(function() {

  var $form = $('form');

  //If form is valid
  if ($form[0].checkValidity()) {
    event.preventDefault();
    var $welcome = $('<h2>Welcome!</h2>');
    $('.largeView').hide();
    $('#welcomeScreen').show();
    $('#welcomeScreen').append($welcome);
  }
});