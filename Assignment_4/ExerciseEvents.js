/*
  Exercises 01
  ------------
  Add a label to each of the input fields: username, password, confirm password
*/

 var x = document.createElement("LABEL");
 var t = document.createTextNode("Username");
 x.setAttribute("for", "username");
 x.appendChild(t);
 document.getElementById("label1").insertBefore(x,document.getElementById("username"));

 var x = document.createElement("LABEL");
 var t = document.createTextNode("Password");
 x.setAttribute("for", "password");
 x.appendChild(t);
 document.getElementById("label2").insertBefore(x,document.getElementById("password"));

 var x = document.createElement("LABEL");
 var t = document.createTextNode("confirmPassword");
 x.setAttribute("for", "confirmPassword");
 x.appendChild(t);
 document.getElementById("label3").insertBefore(x,document.getElementById("confirmPassword"));

/*
  Exercise 02
  -----------
  Add a required validation to each input that shows an error message next to the entry if it does not have any text entered.
*/
function validate() {
  var xy = document.querySelector("#username").value;
  if (xy == "") {
    document.getElementById("popup").innerHTML = "this is required";
    return false;
  }
}

/*
  Exercise 03
  -----------
  Add a further validation to check if the user input in the password and confirm password inputs match.  Show an error message if they do not.
*/
function validatePassword() {
  var x = document.querySelector("#password").value;
  var y = document.querySelector("#confirmPassword").value;
  if (x !== y) {
    alert("password do not match");
    return false;
  }
}

/*
  Exercise 04
  -----------
Ensure the ‘Register’ button is disabled until the user has entered valid data into all the input fields.  Once they have, the registration button should then be enabled.
*/

var xy = document.querySelector("#username").value;
var x = document.querySelector("#password").value;
var y = document.querySelector("#confirmPassword").value;
if (xy !== " " || x !== " "){
  document.getElementsById("btn").disabled = false;
}
else{
  document.getElementsById("btn").disabled = true;
}

/*
  Exercise 05
  -----------
When the user clicks the ‘Register’ button, a message should be displayed informing them of a successful user registration.
*/
 function Register(){
   alert("registration successful");
 }
