
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
      name: 'Simon',
      email: 'simonflenman1@gmail.com',
      dob: '2000-03-26'
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
  
