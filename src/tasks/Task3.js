import React, { useState } from 'react';

function Task3() {
  const [toggle, setToggle] = useState(false);

  const changeColor = (event) => {
    const main1 = document.getElementById('main1');
    main1.style.backgroundColor = event.target.style.backgroundColor;
    console.log(event.target.style.backgroundColor);
  };

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <div id="main1">
      <h1>Color Picker</h1>
      {toggle ? (
        <div id="main">
        <div className="square" style={{ backgroundColor: '#ffff00' }} onClick={changeColor}></div>
          <div className="square" style={{ backgroundColor: '#fe00fe' }} onClick={changeColor}></div>
          <div className="square" style={{ backgroundColor: '#00ffff' }} onClick={changeColor}></div>
          <div className="square" style={{ backgroundColor: '#fe0000' }} onClick={changeColor}></div>
          <div className="square" style={{ backgroundColor: '#00ff00' }} onClick={changeColor}></div>
          <div className="square" style={{ backgroundColor: '#0000fe' }} onClick={changeColor}></div>
          <div className="square" style={{ backgroundColor: '#008000' }} onClick={changeColor}></div>
          <div className="square" style={{ backgroundColor: '#fe6347' }} onClick={changeColor}></div>
          <div className="square" style={{ backgroundColor: '#00cfd1' }} onClick={changeColor}></div>
          <div className="square" style={{ backgroundColor: '#fea500' }} onClick={changeColor}></div>
          <div className="square" style={{ backgroundColor: '#81007f' }} onClick={changeColor}></div>
          <div className="square" style={{ backgroundColor: '#ffc0cb' }} onClick={changeColor}></div>
          <div className="square" style={{ backgroundColor: '#8b4413' }} onClick={changeColor}></div>
          <div className="square" style={{ backgroundColor: '#ff8b00' }} onClick={changeColor}></div>
          <div className="square" style={{ backgroundColor: '#4683b4' }} onClick={changeColor}></div>
          <div className="square" style={{ backgroundColor: '#fed700' }} onClick={changeColor}></div>
        </div>
      ) : <div></div>}

      <button onClick={handleClick}>
        {toggle ? 'Hide Color Palette' : 'Show Color Palette'}
      </button>
    </div>
  );
}

export default Task3;
