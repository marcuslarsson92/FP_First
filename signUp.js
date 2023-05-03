let firstName;
let lastName;
let email;
let password;

function sendPostRequest() {
    firstName = document.getElementById("fname").value;
    lastName = document.getElementById("lname").value;   
    email = document.getElementById("email").value;
    password = document.getElementById("passw").value;

    if(validateEmail(email)){
      if(validatePassword(password)){
        
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
    }else{
      alert("This E-mail is not valid!")
    }
}    

function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}
function validatePassword(password){
    if((password.length < 6) || (password.length > 16 ) 
    || password.length === 0 ){
      alert("Password is required and has to be between 6-16 characters")
      return false;
    }else {
      return true;
    } 
}