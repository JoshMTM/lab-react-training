import React from 'react';
import './IdCard.css';

export default function IdCard(props) {
  return (
    <div className="IdCard">
      <img src={props.picture} alt="pictureId" />
      <div className="Iddetails">
        <p>
          <b>Last Name: </b>
          {props.lastName}
        </p>
        <p>
          <b>First Name: </b>
          {props.firstName}
        </p>
        <p>
          <b>Gender: </b>
          {props.gender}
        </p>
        <p>
          <b>Height: </b>
          {props.height}cm
        </p>{' '}
        <p>
          <b>Gender: </b>
          {props.birth.toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}
