import React from 'react';

function Numbers(props) {
  let elem = [];
  let count = 0;
  for (let i = 0; i < props.limit; i++) {
    count++;
    elem.push(count);
  }

  let bgColor = '';
  if (count % 2 == 0) {
    bgColor = 'red';
  } else {
    bgColor = 'white';
  }

  return (
    <div style={{ display: 'flex' }}>
      {elem.map((elem) => {
        return (
          <div
            style={{
              width: '80px',
              height: '50px',
              backgroundColor: bgColor,
              margin: '5px',
            }}
          >
            {elem}
          </div>
        );
      })}
    </div>
  );
}

export default Numbers;
