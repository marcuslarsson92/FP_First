
let count = 0;


function increment() {
    let countEl = document.getElementById("followers");
    console.log("Button clicked")
    //console.log(countEl)
    console.log(count)
    count++
    countEl.innerHTML = count;
}


/*
function increment() {
    console.log("Button clicked")
    console.log(countEl)
    console.log(count)
    count++
    countEl.innerText(count);
}
*/
