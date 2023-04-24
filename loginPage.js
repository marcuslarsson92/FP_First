
let email;
let password;

document.getElementById("loginButton").onclick = function(){
    email = document.getElementById("email").value;
    password = document.getElementById("passw").value;

    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
    })
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.error("Error:", error));
}
