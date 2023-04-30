
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

  const gradient = document.createElement('style');
gradient.innerHTML = `
  body {
    background: linear-gradient(135deg, #84FAB0 10%, #8FD3F4 100%);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
  }

  @keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;
document.head.appendChild(gradient);

const heading = document.querySelector('h1');
if (heading) {
  heading.style.color = 'transparent';
  heading.style.backgroundImage = 'linear-gradient(45deg, #84FAB0, #8FD3F4)';
  heading.style.backgroundSize = '200% auto';
  heading.style.webkitBackgroundClip = 'text';
  heading.style.animation = 'shine 5s linear infinite';
}

const shine = document.createElement('style');
shine.innerHTML = `
  @keyframes shine {
    0% { background-position: 200% center; }
    100% { background-position: -200% center; }
  }
`;
document.head.appendChild(shine);

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.style.backgroundColor = '#4CAF50';
    button.style.color = '#ffffff';
});

document.body.style.margin = '20px';
document.body.style.border = '2px solid #ccc';

