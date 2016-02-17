$(function() {
  $login = $('#login');
  $form = $('#loginForm');
  console.log($form);
  $form.on('submit', function(e) {
    e.preventDefault();
    var $section = $('<section></section>');
    $section.html('<h1>Welcome Asshat :)</h1>');
    $login.html($section);
  });
});
