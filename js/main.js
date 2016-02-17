$('.submit').on('click', function(){
  var mail = $('#mail').val();
  var psw = $('#psw').val();
  if (psw.length > 5){
    var newLabel = '<label for="correct">Is '+ mail +' correct?</label><br>';
    var newInputs ='<input type="button" class="yes" value="Yes!"><input type="button" class="cancel" value="Cancel">'

    $('fieldset').html(newLabel + newInputs)
  }
})

