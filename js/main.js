$(document).ready(function() {
    console.log( "ready!" );
});

$('.signin').on("submit", function() {
 event.preventDefault();
 $('.signin').replaceWith('<h3 class="welcome">Welcome to the Future</h3>');
});

