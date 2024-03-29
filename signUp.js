

let firstName;
let lastName;
let email;
let password;

//author: Simon Flenman
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
        .then(response => {
          if (!response.ok) {
            alert("E-Mailadressen existerar redan i database, vänligen logga in med det eller skapa ett konto med ett annat mailadress");
            location.reload();
          } else {// if(response.status == 400){
            alert("Your information is saved according to GDPR guidelines and you can delete your account at any time, read more: \n" + "https://www.imy.se/verksamhet/dataskydd/det-har-galler-enligt-gdpr/grundlaggande-principer/");
            location.reload();
            return response.text();
          }
        })
        .then(data => console.log(data))

        console.log(firstName);
        console.log(lastName);
        console.log(email);
        console.log(password);
      }
    } else{
      alert("This E-mail is not valid!")
    }
    
    
}    
//autor: Simon Flenman
function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}
//autor: Simon Flenman 
function validatePassword(password){
    if((password.length < 6) || (password.length > 16 ) 
    || password.length === 0 ){
      alert("Password is required and has to be between 6-16 characters")
      return false;
    }else {
      return true;
    } 
}