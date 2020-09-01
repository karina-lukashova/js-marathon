class Selectors {
  constructor(name) {
    this.elHP = document.getElementById(`health-${name}`);
    this.elProgressbar = document.getElementById(`progressbar-${name}`);
  }
}

class Pokemon extends Selectors {
  constructor({ name, defaultHP, damageHP, selectors }) {
    super(selectors);

    this.name = name;
    this.defaultHP = defaultHP;
    this.damageHP = damageHP;

    this.renderHP();
  }

  changeHP = (count, btn1, btn2, cb) => {
    const {name} = this;
  
    this.damageHP -= count;
  
    if (this.damageHP <= 0) {
      this.damageHP = 0;
      alert('Бедный ' + name + ' проиграл бой');
      btn1.disabled = true;
      btn2.disabled = true;
    }
    
    this.renderHP();
    cb && cb(count);
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
  }
}

export default Pokemon;