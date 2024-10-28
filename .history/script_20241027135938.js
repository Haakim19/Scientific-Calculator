// var screen = document.querySelector('#screen');
// var btn = document.querySelectorAll('.btn');
var screen = document.getElementById('screen');
var btn = document.getElementsByClassName('btn');

for (item of btn){
    item.addEventListener('click', (e)=>{
        btntext = e.target.innerText;
        if (btntext == 'x'){
            btntext = '*';
        }
        if (btntext == '÷'){
            btntext = '/';
        }
        screen.value += btntext;
    })
}
function sin(){
    screen.value = Math.sin(screen.value);
}
function cos(){
    screen.value = Math.cos(screen.value);
}
function sin(){
    screen.value = Math.sin(screen.value);
}
function sin(){
    screen.value = Math.sin(screen.value);
}
function sin(){
    screen.value = Math.sin(screen.value);
}
function sin(){
    screen.value = Math.sin(screen.value);
}
function sin(){
    screen.value = Math.sin(screen.value);
}