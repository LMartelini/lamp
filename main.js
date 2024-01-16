const turnOn = document.querySelector('#turnOn');
console.log(turnOn)
const turnOff = document.querySelector('#turnOff');
const lamp = document.querySelector('#lamp');

function lampOn() {
    lamp.src = './imagens/ligada.jpg';
}

function lampOff(){
    lamp.src = './imagens/desligada.jpg';
}

function lampBroken(){
    lamp.src = './imagens/quebrada.jpg';
}

turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBroken)


