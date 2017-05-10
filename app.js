
$(function() {
  $('form').submit(function(event) {
    event.preventDefault();
    $('.login').fadeOut(1000)
    $('.success').delay(1000).fadeIn(1000);
  })
})
