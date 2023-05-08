
function loadUserProfile() {
  // Hämta användar-id från sessionen eller från en cookie
  //const userId = ...; // t.ex. sessionStorage.getItem("userId");
  const url = "http://localhost:8080/api/v1/member/";

  // Gör en GET-förfrågan till REST API:et för att hämta användarinformationen
  fetch(`/api/users/${userId}`)
    .then(response => response.json())
    .then(user => {
      // Hitta elementen i HTML-mallen och uppdatera dem med användarinformationen
      document.getElementById("name").textContent = user.name;
      document.getElementById("email").textContent = user.email;
      document.getElementById("avatar").src = user.avatarUrl;
      // ... och så vidare för andra fält
    })
    .catch(error => {
      console.error(error);
      // Visa felmeddelande eller redirecta till en annan sida vid fel
    });
}



function savePost() {
    let prediction = document.getElementById("stock-prediction").value;
    let email = document.getElementById("email").innerHTML;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:8080/api/v1/post/new");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = function() {
      if (xhr.status === 200) {
        alert("Successfully posted")
        // handle success response from server
      } else {
        // handle error response from server
        alert("Post not successfull")
        
      }
    };
    console.log(email);
    console.log(prediction);
    xhr.send(JSON.stringify({"email": email, "text": prediction}));
  }
