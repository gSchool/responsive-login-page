$('button').on('click', function (el) {
  //prevent the default form submission behavior
  el.preventDefault();

  //grab user email & password to validate
  var inputEmail = document.getElementById('email').value;
  var inputPassword = document.getElementById('pswd').value;

  // welcome message
  var $welcome = $('<h1>"Welcome to your profile"</h1>');

  //validate user information
  if (inputEmail.includes('@') && (inputPassword.length >= 6)) {
      console.log('success');
      //append a welcome message for the user
       $('section').empty();
       $('section').append($welcome);
      return true;
    } else {
      // give user the proper response depending on which one failed
        if (!(inputEmail.includes('@'))) {
          alert('invalid email');
        } else if ((inputPassword.length < 6)) {
          alert('pswd too short');
        }
        //clear inputs
        $('input').val('');
        return false;
    }
});
