$('.submit').on('click', function(){
  var mail = $('#mail').val();
  var psw = $('#psw').val();
  var newLabel = '<label for="correct">Is '+ mail +' correct?</label><br>';
  var newInputs ='<input type="button" class="yes" value="Yes!"><input type="button" class="cancel" value="Cancel">'

  $('fieldset').html(newLabel + newInputs)
})

// $('.yes').on('click', function(){
//   $('fieldset').empty();
//   $('fieldset').append("Great! Have a fantastic day!")

// });