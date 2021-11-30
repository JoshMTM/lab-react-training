import React from 'react';
import { useState } from 'react';

function Carousel(props) {
  let [increment, setIncrement] = useState(0);
  function changeImg(event) {
    if (increment <= props.imgs.length) setIncrement(increment + 1);
  }

  function changeImgAgain(event) {
    setIncrement(increment - 1);
  }

  return (
    <div>
      <button onClick={changeImg}>Left</button>
      <img src={props.imgs[increment]} alt="imgcarousel" />
      <button onClick={changeImgAgain}>Right</button>
    </div>
  );
}

export default Carousel;
