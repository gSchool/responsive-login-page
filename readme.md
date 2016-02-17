# Responsive Login Page

You will be building a responsive login page based on the mockup found in the [mockup folder](./mockup). To complete, you will need to use:

* Semantic HTML
* Form Labels & Inputs
* CSS & Media Queries
* jQuery

* * *

### Instructions:

1. Fork this repository
1. Clone down your forked version
1. Code!
1. Answer the question below -- your response should be 2 - 4 sentences
1. Make a Pull Request against this repository

__Discuss the relationship between HTML, JavaScript, the DOM API, and jQuery:__
> HTML provides the structure of the document, the DOM API provides accessible methods to that structure, and Javascript allows for logical operations on the API methods to have DOM elements transform into what the user want. JQuery uses all three of these to abstract out the complexity of making the DOM manipulations by simpler DOM selection methods.

### Acceptance Criteria:

* The login form must be centered on a wide view
* The login button should take up the same width as an input box on a small view
* The password field correctly hides passwords
* HTML5 Form Validation is added to each input field
  * Email must be correctly formatted
  * Password must be longer than six characters
* On submission, the view stays the same (i.e. there is no page reload)
* If the form has no validation errors, the form is removed and a simple welcome message is displayed
  * Make sure to create a new element in memory for this welcome message

### Constraints:

* Do not use Bootstrap
* Do not use jQuery to validate forms
* Create the "Welcome Message" in memory before appending to the DOM.

### Objectives

We will be assessing the following:

__HTML:__
* Tags are in a logical order to match reality
* Tags are properly indented to show nesting visually
* Correctly uses attributes
* Use structural tags to create a semantic, usable form (label, fieldset)
* Build forms that use all HTML5 controls
* Labels are associated with form controls ("for" attribute)

__CSS:__
* Show and hide content intended for specific screens/screen sizes with media queries
* Creates CSS classes for groups of elements that behave similarly
* Selectors and rules are demarcated by usage, using comments and by grouping similar functionality

__JS/jQuery:__
* Create and Return a complex Element from a Function
* Can create new DOM Elements
