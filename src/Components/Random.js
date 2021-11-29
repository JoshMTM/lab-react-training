import React from 'react';

export default function Random({ max, min }) {
  let randomNumber = Math.floor(Math.random() * (max - min) + min);
  return <div>{randomNumber}</div>;
}
