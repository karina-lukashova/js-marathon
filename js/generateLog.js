import random from "./random.js";

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

  return logs[Math.ceil(Math.random() *(logs.length - 1))];
}

export default generateLog;