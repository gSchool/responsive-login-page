$(document).on('ready', function () {
  console.log('sanity check!');
  appendWelcomeMessage();
});

function appendWelcomeMessage () {
  $('form').on('submit', function (event) {
    event.preventDefault();
    $('.container').empty();
    $('.container').append('<div id="welcome"><h1>WELCOME</h1></div>');
  });
}