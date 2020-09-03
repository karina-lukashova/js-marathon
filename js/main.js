import Pokemon from "./pokemon.js";
import generateLog from "./generateLog.js";
import random from "./random.js";
import countBtn from "./countBtn.js";
import generatePlayers from "./generatePlayers.js";

let player1 = new Pokemon({
  ...generatePlayers(),
  selectors: 'player1'
});

let player2 = new Pokemon({
  ...generatePlayers(),
  selectors: 'player2'
});

const $control = document.querySelector('.control');
const $elImg1 = document.getElementById('img-player1');
const $elImg2 = document.getElementById('img-player2');
const $elName1 = document.getElementById('name-player1');
const $elName2 = document.getElementById('name-player2');
const $logs = document.querySelector('#logs');

function changeImgName () {
  $elImg1.src = player1.img;
  $elName1.innerText = player1.name;
  $elImg2.src = player2.img;
  $elName2.innerText = player2.name;
}

function showLog (player, enemy, remainHP) {
  const $p = document.createElement('p');
  $p.innerText = generateLog(enemy, player, remainHP);
  $logs.insertBefore($p, $logs.children[0]);
}

function attackEnemy (player, enemy) {
  changeImgName();
  player.attacks.forEach(item => {
    const $btn = document.createElement('button');
    $btn.classList.add('button');
    $btn.innerText = item.name;
    $control.appendChild($btn);
    $control.style.flexDirection = 'column';
    const btnCount = countBtn($btn, item.maxCount);
  
    $btn.addEventListener('click', () => {
      btnCount();
      const beforeHP = enemy.damageHP;
      enemy.changeHP(random(item.maxDamage, item.minDamage));
      const remainHP = beforeHP - enemy.damageHP;
      showLog(player, enemy, remainHP);
    });
  });
}

function resetGame () {
  const allButtons = document.querySelectorAll('.control .button');
  allButtons.forEach($item => $item.remove());

  const $startBtn = document.createElement('button');
  $startBtn.classList.add('button');
  $startBtn.innerText = 'Start New Game';
  $control.appendChild($startBtn);
  $control.style.flexDirection = 'row';

  $startBtn.addEventListener('click', function startGame() {
    player1 = new Pokemon({
      ...generatePlayers(),
      selectors: 'player1'
    });
    player2 = new Pokemon({
      ...generatePlayers(),
      selectors: 'player2'
    });
    $logs.innerText = '';
    player1.elProgressbar.classList.remove('low');
    player1.elProgressbar.classList.remove('critical');
    player2.elProgressbar.classList.remove('low');
    player2.elProgressbar.classList.remove('critical');
    attackEnemy(player1, player2);
    attackEnemy(player2, player1);
    $startBtn.remove();
  });
}

resetGame();

export {resetGame};