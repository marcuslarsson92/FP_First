
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
                    let result = xhr.responseText; //kommer vara true eller false
                    console.log(result)
                    if(result === "true") {
                        window.location.href = "/index.html";
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
}
function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  
        