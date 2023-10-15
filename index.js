
var posts = [];

document.addEventListener("DOMContentLoaded", function() {
  loadUserProfile(); // info om aktiva användaren
  loadPosts(); //
  
  //handlePosts();
});


//author: Alexandra A Holter
//Metod som 
function loadUserProfile() {

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

      //document.getElementById("currentUser").textContent = firstName + " " + lastName;
      //document.getElementsByClassName("currentUser").textContent = firstName + " " + lastName;
      var elements = document.querySelectorAll(".currentUser");

        elements.forEach(function(element) {
          element.textContent = firstName + " " + lastName;
        });
    })
    
    .catch(error => {
      console.log("could not load users info");
      // Visa felmeddelande eller redirecta till en annan sida vid fel
    });
    
}
//author: Alexandra A Holter
function sendToProfile() {
  var url = new URL(window.location.href);
  email = url.searchParams.get("id");
  console.log(email);

  window.location.href = "/profile.html?id=" + email;

}





//author: Alexandra A Holter and Simon Flenman
function loadPosts() {
  var urlServer = "http://localhost:8080/api/v1/post";
  var text;
  var email;
  var date;

  fetch(urlServer, {
    method: 'GET'
  })
  .then(response => response.json())
  .then(posts => {
      // Skapa en tom array för att lagra inlägg
      //var posts = [];
      //console.log(posts);

      var postObjects = [];

      // Loopa igenom inläggen och skapa post-objekt med email och text attribut
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


var friendUserElements = document.querySelectorAll(".friendUser");
var textElements = document.querySelectorAll(".text");
var dateElements = document.querySelectorAll(".date");

postObjects.forEach((postObject, index) => {
  friendUserElements[index].textContent = postObject.email;
  textElements[index].textContent = postObject.text;
  dateElements[index].textContent = postObject.date;

  // Skapa ett nytt Date-objekt från postObject.date
  var date = new Date(postObject.date);

  var year = date.getFullYear();
  var month = String(date.getMonth() + 1).padStart(2, '0'); // Lägg till en ledande nolla om månaden är mindre än 10
  var day = String(date.getDate()).padStart(2, '0'); // Lägg till en ledande nolla om dagen är mindre än 10

  var formattedDate = year + ' ' + month + ' ' + day;

  dateElements[index].textContent = formattedDate;

  //dateElements[index].textContent = postObject.date;
}); 
   
    
  })
    .catch(error => console.log(error));
}

//author: Auss Al-Obaidi
function countCharacters() {
  const textarea = document.getElementById('stock-prediction');
  const publishButton = document.getElementById('publish');
  const charCount = document.getElementById('charCount');

  const currentLength = textarea.value.length;
  charCount.textContent = `${currentLength}/1000`;

  if (currentLength > 1000) {
      publishButton.disabled = true;
      publishButton.classList.add('disabled');
  } else {
      publishButton.disabled = false;
      publishButton.classList.remove('disabled');
  }
}






//author: Alexandra A Holter, Simon Flenman
function createPost() {
    let prediction = document.getElementById("stock-prediction").value;
    let currentUserElement = document.querySelector(".currentUser");
    let email = currentUserElement.textContent;
    
    
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:8080/api/v1/post/new");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = function() {
      if (xhr.status === 200) {
        alert("Successfully posted")
        var post = {
          user: email, // Användarinformation
          text: prediction
        }
        location.reload();
        // handle success response from server
      } else {
        // handle error response from server
        alert("Post not successfull")
        
      }
      //createPost();
    };
    console.log(email);
    console.log(prediction);
    xhr.send(JSON.stringify({"email": email, "text": prediction}));

    
    
  }

  function handlePosts(posts) {
    var container = document.getElementById("postsContainer");

    var posts = [];
    // Loopa igenom inläggen
    for (var i = 0; i < posts.length; i++) {
      var post = posts[i];
      var user = post.user;
      var content = post.content;
  
      // Skapa HTML-element för användarprofil och inläggstext
      var userProfile = document.createElement("div");
      userProfile.className = "userProfile";
      var userImage = document.createElement("img");
      userImage.src = "/images/pic.png";
      var userDetails = document.createElement("div");
      var userName = document.createElement("a");
      userName.id = "friendUser";
      userName.textContent = user;
      var postTime = document.createElement("span");
      postTime.textContent = getCurrentTime(); // Funktion för att få aktuell tid
      userDetails.appendChild(userName);
      userDetails.appendChild(document.createElement("br"));
      userDetails.appendChild(postTime);
      userProfile.appendChild(userImage);
      userProfile.appendChild(userDetails);
  
      var postTextContainer = document.createElement("div");
      postTextContainer.className = "postTextContainer";
      var postText = document.createElement("p");
      postText.className = "text";
      postText.id = "postText";
      postText.textContent = content;
  
      var postInteraction = document.createElement("div");
      postInteraction.className = "postInt";
      var likeLink = document.createElement("a");
      likeLink.href = "#";
      var likeIcon = document.createElement("i");
      likeIcon.className = "fa fa-thumbs-o-up";
      likeLink.appendChild(likeIcon);
      likeLink.appendChild(document.createTextNode(" Like"));
      var commentLink = document.createElement("a");
      commentLink.href = "#";
      var commentIcon = document.createElement("i");
      commentIcon.className = "fa fa-commenting-o";
      commentLink.appendChild(commentIcon);
      commentLink.appendChild(document.createTextNode(" Comment"));
  
      postInteraction.appendChild(likeLink);
      postInteraction.appendChild(commentLink);
  
      postTextContainer.appendChild(postText);
      postTextContainer.appendChild(postInteraction);
  
      // Skapa container för inlägget och lägg till användarprofil och inläggstext
      var postContainer = document.createElement("div");
      postContainer.className = "postsContainer";
      postContainer.appendChild(userProfile);
      postContainer.appendChild(postTextContainer);
  
      // Lägg till inlägget i överordnad container
      container.appendChild(postContainer);
    }
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

/*
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
*/




/*
  window.onload = function hamtaInlaggProfil() {
  fetch('/post/'+ email)
    .then(response => response.json())
    .then(inlaggData => {
      inlagg = inlaggData;
      console.log(inlagg);
      console.log("Hej")
    })
    .catch(error => console.error(error));
}
*/

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
/*function createPost() {
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
*/



