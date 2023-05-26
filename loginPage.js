
/*function login(){
        let email = document.getElementById("email").value;
        let password = document.getElementById("passw").value;
        let url = "http://localhost:8080/api/v1/member/" + email + "/" + password;
        console.log(email);
        console.log(password);

        if(validateEmail(email)){
    
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if(xhr.readyState === XMLHttpRequest.DONE){
                if(xhr.status === 200){
                    let result = xhr.responseText; //kommer vara true eller false
                    console.log(result)
                    if(result === "true") {
                        window.location.href = "/index.html?id=" + result;
                    }
                    else if (result === "false") {
                        alert("Wrong password or email");
                        window.location.href = "/loginPage.html"
                    }
                    
                }else if(xhr.status === 401){
                    alert("Wrong E-Mail or password");
                }
            }
        };
        
        xhr.open('GET', url);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify({email, password}));
    }else{
        alert("This E-mail is not valid")
    }    
}*/

//author: Simon Flenman
function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  
  //author: Simon Flenman, Alexandra Adlercreutz Holter
  function login(){
    let email = document.getElementById("email").value;
    let password = document.getElementById("passw").value;
    let url = "http://localhost:8080/api/v1/member/" + email + "/" + password;
    console.log(email);
    console.log(password);

    if(validateEmail(email)){

        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if(xhr.readyState === XMLHttpRequest.DONE){
                if(xhr.status === 200){
                    let result = xhr.responseText; //parse the JSON response
                    console.log(result)
                    if(result === "true") {
                        //API call to retrieve user info
                        const userInfoUrl = "http://localhost:8080/api/v1/member"// + email + "/" + password;
                        const xhr2 = new XMLHttpRequest();
                        xhr2.onreadystatechange = function(){
                            if(xhr2.readyState === XMLHttpRequest.DONE){
                                console.log("hejdå")
                                if(xhr2.status === 200){
                                    let userInfo = xhr2.responseText;
                                    console.log(userInfo);
                                    
                                    //Update HTML elements on profile page with user info
                                    //document.getElementById("email").innerHTML = userInfo.emal;
                                    //document.getElementById("email").innerHTML = email;
                                    //other fields can be updated in a similar way
                                    window.location.href = "/index.html?id=" + email;
                                }else if(xhr2.status === 401){
                                    alert("Unauthorized access");
                                }
                            }
                        };
                        xhr2.open('GET', userInfoUrl);
                        xhr2.setRequestHeader('Content-Type', 'application/json');
                        xhr2.send();
                    }
                    else {
                        alert("Wrong password or email");
                        window.location.href = "/loginPage.html"
                    }
                    
                }else if(xhr.status === 401){
                    alert("Error, server might not be running");
                }
            }
        };
        
        xhr.open('GET', url);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify({email, password}));
    }else{
        alert("This E-mail is not valid")
    }
}

//autor: Simon Flenman, Alecandra Adlercreutz Holter
document.addEventListener("DOMContentLoaded", function() {
    // Hämta referens till HTML-elementet med id "email"
    var emailElement = document.getElementById("email");
  
    // Hämta användarens e-post från inloggningen och sätt det som värdet på HTML-elementet
    var användarensEmail = /* Hämta användarens e-post från inloggningen */
    emailElement.value = användarensEmail;
  });

//autor: Simon Flenman, Alecandra Adlercreutz Holter
function uppdateEmail(email){
    document.getElementById("email").innerHTML = email;
}

  
        