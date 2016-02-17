$(document).on('ready', function() {
  console.log('Ready, PLAYER ONE?');

  $(document).on('click', '#submit', function(){
      // Prevent event submission
      event.preventDefault();
      
      console.log($('#login-form').validate());
      
      if ($('form').valid()) {
        $('form').hide();
        $('body').append('<h3 class ="center">There are many responsive login pages out there, but this one\'s mine.</h3>');
      }
      
  });  

});