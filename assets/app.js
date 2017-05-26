$(document).ready(appReady);

// Create Document Ready Function
function appReady() {
  formSubmit();
}

// Form Submit Function. Target the form by class and call the getFormData Function
function formSubmit() {
  $(".login-form").submit(getFormData);
}

// When the form is submitted, prevent the default action and get the values from the input fields
function getFormData(event) {
  event.preventDefault();
  const userEmailAddress = $("#email-input").val();
  const userPassword = $("#password-input").val();
  // Pass the values from the input fields to validate password length and whether the email address is valid or not
  // Store the values into a variable to use for conditional statement
  const emailValue = validEmailAddress(userEmailAddress);
  const passwordValue = validPassword(userPassword);
  // If password and email address are valid hide the form and display the success message
  if (emailValue == true && passwordValue == true) {
    console.log("dafaq")
    hideForm(true);
    createWelcomeMessage();
  }
}

// Validation for email address
function validEmailAddress(userEmailAddress) {
  var filter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (filter.test(userEmailAddress)) {
    return true;
  } else {
    alert("You have entered an invalid email address!");
    return false;
  }
}
// Part of validation of email address

function checkEmail() {
  if (document.layers || document.getElementById || document.all)
    return validEmailAddress()
  else
    return true
}

// Validation for password length
function validPassword(userPassword) {
  if (userPassword.length < 6) {
    alert("Please enter a valid password. Password must be 6 or more characters")
    return false;
  } else {
    return true;
  }
}

// Create new div element
function createWelcomeMessage() {
  let createDiv = $("<div></div>");
  let welcomeMessage = $("<h2></h2>");
  $(welcomeMessage).text("Success!").addClass("login-window").css("text-align", "center");
  $("body").prepend(createDiv);
  $(createDiv).append(welcomeMessage);
}

// Hide login form after submit
function hideForm(isTrue) {
  if (isTrue) {
    $("section").hide();
  } else {
    $("section").show();
  }
}
