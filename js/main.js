$(document).ready(function() {
    console.log( "ready!" );
});

$('.signin').on("submit", function() {
 event.preventDefault();
 $('.signin').replaceWith('<h3>Welcome to the Future</h3>');
});

