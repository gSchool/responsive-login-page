$(document).ready(function(){
	// alert("Welcome Bro")
	// var inputEmail = document.getElementById("email").val;
	// var inputPassword = document.getElementById("pass").val

	$('#butt').on('click', function(){
		var inputEmail = document.getElementById("email").value;
		var inputPassword = document.getElementById("pass").value;
		console.log(inputEmail)
		console.log(inputPassword)

		 function input(){
		if((inputEmail.includes("@")) && (inputPassword.length >= 6)){
			return true
		} else { return false}

		}

		var inputResult = input();

		if( inputResult === true){
			$('section').html('<h1>' + "Welcome Bro" + '</h1>')
		} else {
			alert("try again homie")
		}
	})
	
	

})