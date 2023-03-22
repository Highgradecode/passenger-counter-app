
const countEl = document.getElementById("count-el");

let count = 0;

function increment() {
   count = count + 1;
   countEl.innerText = count;
}

//const incrementBtn = document.getElementById('increment-btn')

// let count = 0
// incrementBtn.addEventListener('click', () => {
    
//    count = count + 1;
//    countEl.innerText = count;
// }) 

function save() {
    console.log(count);
}
