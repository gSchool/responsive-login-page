$(document).on('ready', function() {
  console.log('sanity check!');
});

$("form").on("submit", function(event){
	event.preventDefault();

	var email = $("#email").val();
	var password = $("#password").val();
	console.log(email, password);

validatedForm(email, password);


});

var welcome = $("<h1 class='welcome'>"+'Welcome!'+"</h1>")
function validatedForm(email, password){
	if ( email.indexOf(".") !== email.length -1 && password.length > 5) {
		$("form").html(welcome);
		return true;
	} else {
		$("#email").addClass("error");
		$("#password").addClass("error");
		return false;
	}
}

