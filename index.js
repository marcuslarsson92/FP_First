<<<<<<< Updated upstream

let count = 0;

function increment() {
    let countEl = document.getElementById("numF");
    console.log("Button clicked")
    count++
    countEl.innerHTML = count;
}


function sendPostRequest() {
    const url = 'http://localhost:8080/api/v1/member';
    const data = {
      name: 'Filip',
      email: 'filip@gmail.com',
      dob: '1997-03-26'
    };

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
  }

  function sendDeleteRequest() {
    fetch('http://localhost:8080/api/v1/member/1', { method: 'DELETE',})
    .then(response => {
    if (!response.ok) {
      throw new Error('Something went wrong');
    }
    console.log('Member deleted successfully');
  })
  .catch(error => {
    console.error('Error deleting member:', error);
  });

  }
=======
function savePost() {
    var prediction = document.getElementById("stock-prediction").value;
    var member = document.getElementById("currentMember").value;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:8080/api/v1/post");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = function() {
      if (xhr.status === 200) {
        // handle success response from server
      } else {
        // handle error response from server
      }
    };
    xhr.send(JSON.stringify({prediction: prediction}));
  }
>>>>>>> Stashed changes
