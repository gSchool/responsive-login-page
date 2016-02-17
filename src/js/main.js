$(document).ready(function () {

});

$('form').on('submit', function (event) {
    event.preventDefault();
    $('section').empty();
    var newArticle = $('<article id="welcomeMessage"><h1>Welcome to My Page!</h1></article>');

    $('.mainSection').append(newArticle);

});