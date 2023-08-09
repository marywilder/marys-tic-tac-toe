import React from 'react'
import Board from './Board';


function Reset() {

    function handleRestart(e) {
            
        const squareData = document.querySelectorAll('.squaresData');

        squaresData.innerHTML = ""
        
        
      for (let i = 0; i < squares.length; i++) {
            
            squares[i] = null;
            console.log('cleared!')
            
        }  
        
        console.log(squares)
        
        
        
    }
  return (
    <button onClick={handleRestart}className="reset">restart</button>
  )
}

export default Reset
