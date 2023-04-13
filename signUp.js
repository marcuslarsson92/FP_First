let firstName;
let lastName;
let email;
let password;

//document.addEventListener("DOMContentLoaded", function(){
document.getElementById("signUpButton").onclick = function(){
    firstName = document.getElementById("fname").value;
    lastName = document.getElementById("lname").value;   
    email = document.getElementById("email").value;
    password = document.getElementById("passw").value;

    console.log(firstName);
    console.log(lastName);
    console.log(email);
    console.log(password);
}
//});