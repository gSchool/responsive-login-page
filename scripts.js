$('button').click(function() {

  var $form = $('form');

  //If form is valid
  if ($form[0].checkValidity()) {
    event.preventDefault();
    $('.largeView').hide();
    $('#welcomeScreen').show();
  }
});