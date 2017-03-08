function validate(){
  //Grab the user's input and store in variables
  var userEntered = document.getElementById("user").value;
  var userLength = userEntered.length;
  if(userLength >= 6){
    //Turn the username items green
    document.getElementById("usernameGroup").classList.add("has-success");
  }
  else{
    //Show message that there is an error with the username...
    //Turn the username items red
    document.getElementById("usernameError").innerHTML="Bad username.";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    document.getElementById("usernameGroup").classList.add("has-error");
  }
  var passEntered = document.getElementById("pass").value;
  if(passEntered == "password"){
    //Show message that there is an error with the password...
    //Turn the username items red
    document.getElementById("passwordError").innerHTML="Bad password.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    document.getElementById("passwordGroup").classList.add("has-error");
  }
  else{
  //Turn the username items green
  document.getElementById("passwordGroup").classList.add("has-success");
  }
}
