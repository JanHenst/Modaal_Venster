const deContent = document.querySelectorAll('.deContent');

for (let i = 0; i < deContent.length; i++) {
  let modaalNode = deContent[i]
  modaalNode.parentNode.removeChild(modaalNode);
}

const knoppen = document.querySelectorAll('.knop');
const knoppenArray = [];

let modaalAchtergrond = document.createElement('div');
modaalAchtergrond.className = 'modaal-achtergrond';
let modaal = document.createElement('div');
modaal.className = 'modaal';
let sluitKnop = document.createElement('button');
sluitKnop.className = 'sluit-knop';
sluitKnop.innerHTML = '&#x00d7;';

const voegInhoudToe = (event) => {
  const teller = knoppenArray.indexOf(event.target);
  console.log(teller);
  modaal.appendChild(sluitKnop);
  modaal.appendChild(deContent[teller]);
  modaalAchtergrond.appendChild(modaal);
  document.body.appendChild(modaalAchtergrond);
}

const sluitModaal = () => {
  modaal.innerHTML = '';
  modaalAchtergrond.innerHTML = '';
  document.body.removeChild(modaalAchtergrond);
}

sluitKnop.addEventListener('click', sluitModaal);

modaalAchtergrond.addEventListener('click', sluitModaal);

modaal.addEventListener('click', stop);

for (let i = 0; i < knoppen.length; i++) {
  knoppenArray.push(knoppen[i]);
  knoppen[i].addEventListener('click', voegInhoudToe)
}

function stop(event) {
  event.stopPropagation();
}
