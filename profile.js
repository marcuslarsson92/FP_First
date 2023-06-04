
/*
document.addEventListener("DOMContentLoaded", function() {
    
    loadUserProfilePage(); // info om aktiva användaren
   // loadPostsCurrentUser();
    

  

  });

  


  function loadUserProfilePage() {

    var url = new URL(window.location.href);
    var email = url.searchParams.get("id");
    console.log(email);
    var firstName;
    var lastName;

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
        
        var elements = document.querySelectorAll(".currentUser");

        elements.forEach(function(element) {
          element.textContent = firstName  + " " + lastName;
        });
        document.getElementById("currentUser1").textContent = firstName + " " + lastName;

      })
      
      .catch(error => {
        console.log("could not load users info");
        // Visa felmeddelande eller redirecta till en annan sida vid fel
      });*/
      document.addEventListener("DOMContentLoaded", function() {
        loadUserProfilePage(); // info om aktiva användaren
      });
      
      function loadUserProfilePage() {
        var url = new URL(window.location.href);
        var email = url.searchParams.get("id");
        var firstName;
        var lastName;
      
        var urlServer = "http://localhost:8080/api/v1/member";
      
        fetch(urlServer + "/" + email, {
          method: 'GET'
        })
        .then(response => response.json())
        .then(user => {
          firstName = user.firstName;
          lastName = user.lastName;
      
          var elements = document.querySelectorAll(".currentUser");
          elements.forEach(function(element) {
            element.textContent = firstName + " " + lastName;
          });
          document.getElementById("currentUser1").textContent = firstName + " " + lastName;
          
          loadPostsCurrentUser(firstName, lastName); // Anropa funktionen här efter att användarinformationen har hämtats
        })
      
      
      
  }

  function sendToMainPage() {
    var url = new URL(window.location.href);
    email = url.searchParams.get("id");
    console.log(email);
  
    window.location.href = "/index.html?id=" + email;
  
  }


  function loadPostsCurrentUser(firstName, lastName) {

    
    //var firstName;
    //var lastName;
/*
    var uName = document.getElementById("currentUser1").value;
    console.log(uName);
    */

    var elements = document.querySelectorAll(".currentUser");

        elements.forEach(function(element) {
          element.textContent = firstName  + " " + lastName;
        });
        console.log(firstName);
        console.log(lastName);

        //var email = document.getElementById("currentUser1").value;
        //console.log(email);

    var urlServer = "http://localhost:8080/api/v1/post";
    var text;
    var date;
  
    fetch(urlServer + "/" + firstName + "%20" + lastName, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(posts => {
        
  
        var postObjects = [];
        
        posts.forEach(post => {
          var postObject = {
            email: post.email,
            text: post.text,
            date: post.date
          };
  
          // Lägg till post-objektet i arrayen
        postObjects.push(postObject);
  
      });
      console.log(postObjects);
  
  
      var friendUserElements = document.querySelectorAll(".currentUser");
  var textElements = document.querySelectorAll(".text");
  var dateElements = document.querySelectorAll(".date");
  
  postObjects.forEach((postObject, index) => {
    friendUserElements[index].textContent = postObject.email;
    textElements[index].textContent = postObject.text;
    var date = new Date(postObject.date);

  var year = date.getFullYear();
  var month = String(date.getMonth() + 1).padStart(2, '0'); // Lägg till en ledande nolla om månaden är mindre än 10
  var day = String(date.getDate()).padStart(2, '0'); // Lägg till en ledande nolla om dagen är mindre än 10

  var formattedDate = year + ' ' + month + ' ' + day;

  dateElements[index].textContent = formattedDate;

  }); 
     
      
    })
      .catch(error => console.log(error));
  }