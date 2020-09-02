import Pokemon from "./pokemon.js";
import generateLog from "./generateLog.js";
import random from "./random.js";

const player1 = new Pokemon({
  name: 'Pikachu',
  defaultHP: 100,
  damageHP: 100,
  selectors: 'character'
});

const player2 = new Pokemon({
  name: 'Charmander',
  defaultHP: 100,
  damageHP: 100,
  selectors: 'enemy'
});

const $btn = document.getElementById('btn-kick');
const $btn2 = document.getElementById('btn-kick-2');

function kick (firstPerson, secondPerson, kickName, button, countDamage, countKickMax) {
  let countKick = 0;
  const innerText = button.innerText;
  button.innerText = `${innerText} (${countKick} / ${countKickMax})`;

  const $p1 = document.createElement('p');
  const $p2 = document.createElement('p');
  const $logs = document.querySelector('#logs');
  
  return function () {
    countKick++;
    let countKickElse = countKickMax - countKick;

    firstPerson.changeHP(random(countDamage), $btn, $btn2, function(count) {
      $p1.innerText = generateLog(firstPerson, secondPerson, count);
      $logs.insertBefore($p1, $logs.children[0]);
    });

    secondPerson.changeHP(random(countDamage), $btn, $btn2, function(count) {
      $p2.innerText = generateLog(secondPerson, firstPerson, count);
      $logs.insertBefore($p2, $logs.children[0]);
    });

    if (countKick < countKickMax) {
      button.innerText = `${innerText} (${countKick} / ${countKickMax})`;
    } else {
      button.innerText = `${innerText} (${countKick} / ${countKickMax})`;
      button.disabled = true;
    }
  }
}

$btn.addEventListener('click', kick(player1, player2, 'Thunder Jolt', $btn, 20, 6));
$btn2.addEventListener('click', kick(player1, player2, 'Dragon Breath', $btn2, 30, 6));