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
function tan(){
    screen.value = Math.tan(screen.value);
}
function log(){
    screen.value = Math.log10(screen.value);
}
function root(){
    screen.value = Math.sqrt(screen.value);
}
function e(){
    screen.value = Math.E(screen.value);
}
function pi(){
    screen.value = 3.14159265359;
}
function power(){
    screen.value = Math.pow(screen.value,2);
}