import { useState } from 'react';

import dice1 from '../assets/images/dice1.png';
import dice2 from '../assets/images/dice2.png';
import dice3 from '../assets/images/dice3.png';
import dice4 from '../assets/images/dice4.png';
import dice5 from '../assets/images/dice5.png';
import dice6 from '../assets/images/dice6.png';
import diceEmpty from '../assets/images/dice-empty.png';

function Dice() {
  let arrayDice = [diceEmpty, dice1, dice2, dice3, dice4, dice5, dice6];
  let randomDice = arrayDice[Math.floor(Math.random() * arrayDice.length)];

  const [path, setPath] = useState(randomDice);

  function handleClick() {
    setPath(diceEmpty);
    setTimeout(() => {
      setPath(arrayDice[Math.floor(Math.random() * arrayDice.length)]);
    }, 2000);
  }

  return (
    <div>
      <img
        style={{ width: '100px' }}
        onClick={handleClick}
        src={path}
        alt="randomdice"
      />
    </div>
  );
}

export default Dice;
