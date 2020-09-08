function countBtn (button, countKickMax) {
  let countKick = 0;
  const innerText = button.innerText;
  button.innerText = `${innerText} (${countKick} / ${countKickMax})`;

  return function () {
    countKick++;
    button.innerText = `${innerText} (${countKick} / ${countKickMax})`;
    if (countKick >= countKickMax) {
      button.disabled = true;
    }
  }
}

export default countBtn;