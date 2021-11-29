import React from 'react';
import './CreditCard.css';

function cardHide(card) {
  let hideNum = [];
  for (let i = 0; i < card.length; i++) {
    if (i < card.length - 4) {
      hideNum.push('*');
    } else {
      hideNum.push(card[i]);
    }
  }
  return hideNum.join('');
}

function CreditCard(props) {
  return (
    <div className="creditCard" style={{ backgroundColor: `${props.bgColor}` }}>
      <p className="type">{props.type}</p>
      <p className="number">{cardHide(props.number)}</p>
      <p className="dateexpiry">
        {' '}
        Expires:
        {props.expirationMonth}/{props.expirationYear}
      </p>
      <p className="Bank">{props.bank}</p>
      <p className="owner">{props.owner}</p>
    </div>
  );
}

export default CreditCard;
