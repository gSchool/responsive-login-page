// add scripts

    $('#login').on('click', function(event) {
        var validate = isValid();
        if (validate) {
            event.preventDefault();
            var $welcome = $('<h2></h2>');
            $welcome.html('Oh, it\'s just you.... again.')
            $('section').empty();
            $('section').append($welcome);
        }

    })


function isValid() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email.includes("@") && password.length > 6) {
        return true;
    } else {
        return false;
    }
  }

