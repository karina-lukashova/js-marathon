const $btn = document.getElementById('btn-kick');
const $btn2 = document.getElementById('btn-kick-2');



function renderHPLife() {
  const {elHP, damageHP, defaultHP} = this;
  elHP.innerText = damageHP + ' / ' + defaultHP;
}

function renderProgressbarHP() {
  const {elProgressbar, damageHP, defaultHP} = this;
  elProgressbar.style.width = damageHP / defaultHP * 100 + '%';
}

function renderHP() {
  this.renderHPLife();
  this.renderProgressbarHP();
}

function changeHP(count) {
  const {name} = this;

  this.damageHP -= count;

  if (this.damageHP <= 0) {
    this.damageHP = 0;
    alert('Бедный ' + name + ' проиграл бой');
    $btn.disabled = true;
    $btn2.disabled = true;
  }
  
  this.renderHP();

  const log = this === enemy ? generateLog(this, character, count) : generateLog(this, enemy, count);
  const $p = document.createElement('p');
  const $logs = document.querySelector('#logs');

  $p.innerText = log;
  $logs.insertBefore($p, $logs.children[0]);
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

function generateLog(firstPerson, secondPerson, count) {
  const {name, elHP} = firstPerson;
  const {name: nameSecond} = secondPerson;

  const logs = [
    `${name} вспомнил что-то важное, но неожиданно ${nameSecond}, не помня себя от испуга, ударил в предплечье врага. ${name} получил урон -${count}, теперь у него ${elHP.innerText} жизней.`,
    `${name} поперхнулся, и за это ${nameSecond} с испугу приложил прямой удар коленом в лоб врага. ${name} получил урон -${count}, теперь у него ${elHP.innerText} жизней.`,
    `${name} забылся, но в это время наглый ${nameSecond}, приняв волевое решение, неслышно подойдя сзади, ударил. ${name} получил урон -${count}, теперь у него ${elHP.innerText} жизней.`,
    `${name} пришел в себя, но неожиданно ${nameSecond} случайно нанес мощнейший удар. ${name} получил урон -${count}, теперь у него ${elHP.innerText} жизней.`,
    `${name} поперхнулся, но в это время ${nameSecond} нехотя раздробил кулаком \<вырезанно цензурой\> противника. ${name} получил урон -${count}, теперь у него ${elHP.innerText} жизней.`,
    `${name} удивился, а ${nameSecond} пошатнувшись влепил подлый удар. ${name} получил урон -${count}, теперь у него ${elHP.innerText} жизней.`,
    `${name} высморкался, но неожиданно ${nameSecond} провел дробящий удар. ${name} получил урон -${count}, теперь у него ${elHP.innerText} жизней.`,
    `${name} пошатнулся, и внезапно наглый ${nameSecond} беспричинно ударил в ногу противника. ${name} получил урон -${count}, теперь у него ${elHP.innerText} жизней.`,
    `${name} расстроился, как вдруг, неожиданно ${nameSecond} случайно влепил стопой в живот соперника. ${name} получил урон -${count}, теперь у него ${elHP.innerText} жизней.`,
    `${name} пытался что-то сказать, но вдруг, неожиданно ${nameSecond} со скуки, разбил бровь сопернику. ${name} получил урон -${count}, теперь у него ${elHP.innerText} жизней.`
  ];

  return logs[random(logs.length) - 1];
}

init();

kick($btn, 'Thunder Jolt', 20);
kick($btn2, 'Dragon Breath', 30);
