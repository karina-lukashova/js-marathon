import {resetGame} from "./main.js";

class Selectors {
  constructor(name) {
    this.elHP = document.getElementById(`health-${name}`);
    this.elProgressbar = document.getElementById(`progressbar-${name}`);
  }
}

class Pokemon extends Selectors {
  constructor({ name, hp, selectors, type, img, attacks = [] }) {
    super(selectors);

    this.name = name;
    this.defaultHP = hp;
    this.damageHP = hp;
    this.type = type;
    this.img = img;
    this.attacks = attacks;

    this.renderHP();
  }

  changeHP = (count) => {
    const {name} = this;
    const allButtons = document.querySelectorAll('.control .button');
  
    this.damageHP -= count;
  
    if (this.damageHP <= 0) {
      this.damageHP = 0;
      alert('Бедный ' + name + ' проиграл бой');
      resetGame();
    }
    
    this.renderHP();
  }
    
  renderHP = () => {
    this.renderHPLife();
    this.renderProgressbarHP();
  }

  renderHPLife = () => {
    this.elHP.innerText = this.damageHP + ' / ' + this.defaultHP;
  }

  renderProgressbarHP = () => {
    this.elProgressbar.style.width = this.damageHP / this.defaultHP * 100 + '%';
    if (this.damageHP / this.defaultHP * 100 < 60 && this.damageHP / this.defaultHP * 100 >= 20) {
      this.elProgressbar.classList.add('low');
    } else if (this.damageHP / this.defaultHP * 100 < 20) {
      this.elProgressbar.classList.add('critical');
    }
  }
}

export default Pokemon;