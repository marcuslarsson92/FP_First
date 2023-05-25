
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
      createPost();
    };
    console.log(email);
    console.log(prediction);
    xhr.send(JSON.stringify({"email": email, "text": prediction}));

    
  }
  

// Hämta referensen till länken med id "profile-link"
/*var profileLink = document.getElementById("profileLink");

// Lägg till en "click" händelse lyssnare till länken
profileLink.addEventListener("click", goToProfile);

// Metod som anropas när länken klickas på
function goToProfile(event) {
  // Förhindra standardbeteendet för länken
  event.preventDefault();

  //createPost();
  //hamtaInlaggProfil();
  // window.location.href = "profile.html";
}*/


window.onload = function() {
  var profileLink = document.getElementById("profileLink");
  profileLink.addEventListener("click", goToProfile);

  function goToProfile(event) {
    event.preventDefault();
    window.location.href = "/profile.html";
    //createPost();
    hamtaInlaggProfil();
    console.log("Hej")
  }
};





  let inlagg = [];

function hamtaInlaggProfil() {
  fetch('/post/'+ email)
    .then(response => response.json())
    .then(inlaggData => {
      inlagg = inlaggData;
      console.log(inlagg);
      console.log("Hej")
    })
    .catch(error => console.error(error));
}

function visaInlagg() {
  const inlaggElement = document.getElementById('inlagg');

  inlagg.forEach(inlaggData => {
    const inlaggDiv = document.createElement("postsContainer");
    inlaggDiv.classList.add("inlagg");
    inlaggDiv.innerText = inlaggText;
    const profilSida = document.querySelector("#profil-sida");
    profilSida.insertBefore(inlaggDiv, profilSida.firstChild);
  });
}

//hamtaInlagg(visaInlagg);




// Hämta referensen till elementet där divboxarna ska läggas till
var postsContainer = document.getElementById("posts");

// Skapa en ny divbox för varje inlägg och lägg till den överst
function createPost() {
  var newPost = document.createElement("div");
  newPost.classList.add("postsContainer");

  var userProfile = document.createElement("div");
  userProfile.classList.add("userProfile");
  var userProfileImg = document.createElement("img");
  userProfileImg.setAttribute("src", "/images/pic.png");
  var userProfileName = document.createElement("div");
  var userProfileNameLink = document.createElement("a");
  userProfileNameLink.setAttribute("href", "/profile.html/");//+ email);
  userProfileNameLink.textContent = email;
  userProfileName.appendChild(userProfileNameLink);
  userProfile.appendChild(userProfileImg);
  userProfile.appendChild(userProfileName);

  var postTextContainer = document.createElement("div");
  postTextContainer.classList.add("postTextContainer");
  var postText = document.createElement("p");
  postText.classList.add("text");
  //postText.textContent = "";// Variabel för inläggen som hämtas;
  var postInt = document.createElement("div");
  postInt.classList.add("postInt");
  var postIntLike = document.createElement("a");
  postIntLike.setAttribute("href", "#"); // Knapp för att tumma upp
  var postIntLikeIcon = document.createElement("i");
  postIntLikeIcon.classList.add("fa", "fa-thumbs-o-up");
  postIntLike.appendChild(postIntLikeIcon);
  postIntLike.textContent = " Like";
  var postIntComment = document.createElement("a");
  postIntComment.setAttribute("href", "#"); //Knapp för kommentering
  var postIntCommentIcon = document.createElement("i");
  postIntCommentIcon.classList.add("fa", "fa-commenting-o");
  postIntComment.appendChild(postIntCommentIcon);
  postIntComment.textContent = " Comment";
  postInt.appendChild(postIntLike);
  postInt.appendChild(postIntComment);
  postTextContainer.appendChild(postText);
  postTextContainer.appendChild(postInt);

  newPost.appendChild(userProfile);
  newPost.appendChild(postTextContainer);

  // Hämta referensen till det första elementet i postsContainer
  var firstPost = postsContainer.firstChild;

  // Lägg till den nya divboxen överst i elementet där divboxarna ska visas
  postsContainer.insertBefore(newPost, firstPost);
}

// Anropa funktionen createPost() varje gång en användare publicerar ett inlägg
//createPost();



