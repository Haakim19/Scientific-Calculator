var screen = document.querySelector('screen');
var btn = document.querySelectorAll('btn');

for (item of btn){
    item.addEventListener('click', (event)=>{
        btntext = event.target.innerText;
        screen.value += btntext;
    })
}