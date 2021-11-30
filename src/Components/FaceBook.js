import profiles from '../data/berlin.json';

import React from 'react';

function FaceBook() {
  return (
    <div>
      {profiles.map((elem) => {
        return (
          <div>
            <img src={elem.img} alt="img" />;<p>First name: {elem.firstName}</p>
          </div>
        );
      })}
    </div>
  );
}

export default FaceBook;
