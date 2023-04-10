
let count = 0;

function increment() {
    let countEl = document.getElementById("numF");
    console.log("Button clicked")
    count++
    countEl.innerHTML = count;
}

