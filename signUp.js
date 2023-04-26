let firstName;
let lastName;
let email;
let password;

function sendPostRequest() {
    firstName = document.getElementById("fname").value;
    lastName = document.getElementById("lname").value;   
    email = document.getElementById("email").value;
    password = document.getElementById("passw").value;

    const url = 'http://localhost:8080/api/v1/member';
    const data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
    };

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
    
    console.log(firstName);
    console.log(lastName);
    console.log(email);
    console.log(password);
}