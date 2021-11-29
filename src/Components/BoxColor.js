import React from 'react';

function BoxColor(props) {
  //   const divStyle = {
  //     backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b},)`,
  //   };
  //   console.log(props.r);
  return (
    <div
      style={{ backgroundColor: `rgba(${props.r}, ${props.g}, ${props.b})` }}
    >
      <h2>Colors</h2>
    </div>
  );
}

export default BoxColor;
