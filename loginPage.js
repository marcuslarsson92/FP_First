
let email;
let password;

//Kommentar!!
document.getElementById("loginButton").onclick = function(){
    email = document.getElementById("email").value;
    password = document.getElementById("passw").value;

    console.log(email);
    console.log(password);
}