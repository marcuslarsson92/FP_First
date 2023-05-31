

document.addEventListener("DOMContentLoaded", function() {
    loadUserProfilePage(); // info om aktiva användaren
    //window.location.href = "/index.html?id=" + email;
  });

  


  function loadUserProfilePage() {

    var url = new URL(window.location.href);
    var email = url.searchParams.get("id");
    console.log(email);
    var firstName;
    var lastName;
    var email;
    var id;
  
    var urlServer = "http://localhost:8080/api/v1/member";
  
    // Gör en GET-förfrågan till REST API:et för att hämta användarinformationen
      fetch(urlServer +"/"+ email, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(user => {
  
        id = user.id;
         firstName = user.firstName;
         lastName = user.lastName;
         email = user.email;
         password = user.password;
  
        //console.log(id);
        console.log(firstName);
        console.log(lastName);
        console.log(email);
        //console.log(password);
        /*
        var elements = document.getElementsByClassName("currentUser");

        for (var i = 0; i < elements.length; i++) {
            elements[i].textContent = firstName + " " + lastName;
        }
        */
        var elements = document.querySelectorAll(".currentUser");

        elements.forEach(function(element) {
          element.textContent = firstName + " " + lastName;
        });


        //document.getElementById("currentUser").textContent = firstName + " " + lastName;
        //document.getElementsByClassName("currentUser").textContent = firstName + " " + lastName;
      })
      
      .catch(error => {
        console.log("could not load users info");
        // Visa felmeddelande eller redirecta till en annan sida vid fel
      });
      
  }

  function sendToMainPage() {
    var url = new URL(window.location.href);
    email = url.searchParams.get("id");
    console.log(email);
  
    window.location.href = "/index.html?id=" + email;
  
  }