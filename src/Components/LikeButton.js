import React from 'react';
import { useState } from 'react';

function LikeButton(props) {
  let [increment, setIncrement] = useState(0);
  function handleClick(event) {
    setIncrement(increment + 1);
  }

  let bgcolors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
  let randomColor = bgcolors[Math.floor(Math.random() * bgcolors.length)];

  return (
    <button
      style={{ backgroundColor: randomColor, color: 'white' }}
      onClick={handleClick}
    >
      Like {increment}
    </button>
  );
}

export default LikeButton;
