var screen = document.getElementById('screen');
var btn = document.getElementById('btn');

for (item of btn){
    item.addEventListener('click', (event)=>{
        btntext = event.target.innerText;
        screen.value += btntext;
    })
}