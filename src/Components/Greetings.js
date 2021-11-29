import React from 'react';

export default function Greetings(props) {
  let text = '';
  if (props.lang === 'de') {
    text = 'Hallo';
  } else if (props.lang === 'fr') {
    text = 'Bonjour';
  } else if (props.lang === 'en') {
    text = 'Hello';
  }
  return (
    <div className="greetings">
      {text} {props.children}
    </div>
  );
}
