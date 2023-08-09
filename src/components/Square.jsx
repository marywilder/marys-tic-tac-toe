import React from 'react'

function Square({value, onSquareClick}) {
  return (
    <button
    className="square"
    onClick={onSquareClick}
    data-pro={value}  
    >
        {value}
    </button>
  );
}

export default Square