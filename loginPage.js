
let email;
let password;

function login(){
        email = document.getElementById("email").value;
        password = document.getElementById("passw").value;
        console.log(email);
        console.log(password);
        
    
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if(xhr.readyState === XMLHttpRequest.DONE){
                if(xhr.status === 200){
                    window.location.href = "alt/altHomePage";
                }else if(xhr.status === 401){
                    alert("Wrong E-Main or password");
                }
            }
        };
        
    
        xhr.open('POST', 'http://localhost:8080/api/v1/member');
        xhr.setRequestHeader('Contetnt-Type', 'application/json');
        xhr.send(JSON.stringify({email, password}));
}
        