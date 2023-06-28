
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

  const button = document.querySelector('.profilePicB');
button.addEventListener('click', uploadProfilePicture);

function uploadProfilePicture() {
  const input = document.createElement('input');
  input.type = 'file';
  input.addEventListener('change', handleFileUpload);
  input.click();
}

function handleFileUpload(event) {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.addEventListener('load', function () {
    const base64Image = reader.result;

    // Uppdatera källan (src) för profilbilden
    const profilePic = document.getElementById('profilePic');
    profilePic.src = base64Image;

    // Skapa en textfil med Base64-kodningen
    const textFile = new Blob([base64Image], { type: 'text/plain' });

    // Skapa en länk för att ladda ner textfilen
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(textFile);
    downloadLink.download = 'profile_picture.txt';
    downloadLink.style.display = 'none';

    // Lägg till länken i dokumentet och klicka på den för att ladda ner filen
    document.body.appendChild(downloadLink);
    downloadLink.click();

    // Ta bort länken från dokumentet
    document.body.removeChild(downloadLink);
  });

  reader.readAsDataURL(file);
}

var settingsMenu = document.querySelector(".settingsMenu");

function settingsMenuToggle() {
  settingsMenu.classList.toggle("settingMenuHeight");
}

//uppdatera lösenord från settings


function updatePassword(newPassword) {
  const url = "http://localhost:8080/api/updatepassword";

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ password: newPassword })
  })
    .then(response => {
      if (response.ok) {
        console.log("Lösenordet uppdaterades framgångsrikt.");
      } else {
        console.log("Ett fel inträffade vid uppdatering av lösenordet.");
      }
    })
    .catch(error => {
      console.log("Ett fel inträffade vid uppdatering av lösenordet:", error);
    });
}

//uppdatera emailadressen från settings

function updateEmail(newEmail) {
  const url = "http://localhost:8080/api/updateemail";

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email: newEmail })
  })
    .then(response => {
      if (response.ok) {
        console.log("E-postadressen uppdaterades framgångsrikt.");
      } else {
        console.log("Ett fel inträffade vid uppdatering av e-postadressen.");
      }
    })
    .catch(error => {
      console.log("Ett fel inträffade vid uppdatering av e-postadressen:", error);
    });
}