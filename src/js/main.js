$(document).on('ready', function() {
  console.log('sanity check!');
});

$("form").on("submit", function(event){
	event.preventDefault();

	var email = $("#email").val();
	var password = $("#password").val();
	console.log(email, password)

// empty inputs - not working
	$("#email").text("");
	$("#password").text("");

});