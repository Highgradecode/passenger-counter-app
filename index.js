const countEl = document.getElementById("count-el");
const saveEl = document.getElementById("save-el");

let count = 0;

function increment() {
   count += 1;
   countEl.textContent = count;
}

//const incrementBtn = document.getElementById('increment-btn')

// let count = 0
// incrementBtn.addEventListener('click', () => {
    
//    count = count + 1;
//    countEl.innerText = count;
// }) 

function save() {
    let countStr = count + " - ";

    saveEl.textContent += countStr;
    countEl.textContent = 0;
    count = 0;
}

console.log("Let's count people on the subway");

