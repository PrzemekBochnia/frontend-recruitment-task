const button = document.querySelector("#button");
const counter = document.querySelector("#counter");
const popup = document.querySelector('#popup');
const container = document.querySelector('#container');
const close = document.querySelector('#close');
const hiddenButton = document.querySelector('#hiddenButton');

button.addEventListener('click', function(e){
    e.preventDefault()
    let startCounterValue = localStorage.getItem('counter');
    if(startCounterValue !== null){
        counter.innerHTML = startCounterValue
    };
    if(startCounterValue > 4){
        hiddenButton.style.display = 'block';
    }else if(startCounterValue < 4 ){
        hiddenButton.style.display = 'none';
    }
    popup.style.display ='flex';
    let count = localStorage.getItem('counter');
    if (count === null) {
        count = 1;
    } else {
        count++;
    }
localStorage.setItem("counter", count);
counter.innerHTML = count
});
hiddenButton.addEventListener('click',function(e){
    localStorage.removeItem('counter');
    popup.style.display = 'none';
})
close.addEventListener('click', function(e){
    popup.style.display = 'none';
})
window.onclick = function(event){
    if(event.target == popup){
        popup.style.display = 'none';
    }
};


