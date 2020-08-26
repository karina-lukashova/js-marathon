const $btn = document.getElementById('btn-kick');
const $btn2 = document.getElementById('btn-kick-2');

function renderHPLife() {
  this.elHP.innerText = this.damageHP + ' / ' + this.defaultHP;
}

function renderProgressbarHP() {
  this.elProgressbar.style.width = this.damageHP / this.defaultHP * 100 + '%';
}

function renderHP() {
  this.renderHPLife();
  this.renderProgressbarHP();
}

function changeHP(count) {
  if (this.damageHP < count) {
    this.damageHP = 0;
    alert('Бедный ' + this.name + ' проиграл бой');
    $btn.disabled = true;
    $btn2.disabled = true;
  } else {
    this.damageHP -= count;
  }
  this.renderHP();
}

const character = {
  name: 'Pikachu',
  defaultHP: 100,
  damageHP: 100,
  elHP: document.getElementById("health-character"),
  elProgressbar: document.getElementById("progressbar-character"),
  renderHPLife: renderHPLife,
  renderProgressbarHP: renderProgressbarHP,
  renderHP: renderHP,
  changeHP: changeHP
}

const enemy = {
  name: 'Charmander',
  defaultHP: 100,
  damageHP: 100,
  elHP: document.getElementById("health-enemy"),
  elProgressbar: document.getElementById("progressbar-enemy"),
  renderHPLife: renderHPLife,
  renderProgressbarHP: renderProgressbarHP,
  renderHP: renderHP,
  changeHP: changeHP
}

function init() {
  console.log('Start Game!');
  character.renderHP();
  enemy.renderHP();
}

function random(num) {
  return Math.ceil(Math.random() * num);
}

function kick(button, kickName, count) {
  button.addEventListener('click', function () {
    console.log('Kick: ' + kickName);
    character.changeHP(random(count));
    enemy.changeHP(random(count));
  }) 
}

init();

kick($btn, 'Thunder Jolt', 20);
kick($btn2, 'Dragon Breath', 30);
