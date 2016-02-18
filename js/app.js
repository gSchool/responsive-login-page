$('#login').on('click', function(e) {
    e.preventDefault();
    $('#main').hide();
    $(this).fadeIn(1500 ,loggedIn());

});
function loggedIn() {
    $('body').append("<section id='popup'> <h1 id='congrats'>Congratulations!</h1> " +
        "<p>You have successfully logged in! You're awesome!</p> <section> ");
}
