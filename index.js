
function savePost() {
    var prediction = document.getElementById("stock-prediction").value;
    var member = document.getElementById("currentMember").value;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:8080/api/v1/post");
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
    xhr.send(JSON.stringify({prediction: prediction}));
  }
