import React from 'react'
import {useState} from 'react';
import Square from './Square';
import {calculateWinner} from "../App"




function Board({ xIsNext, squares, onPlay}) {
    const [playerX, setPlayerX] = useState('')
    const [playerO, setPlayerO] = useState('')


    
    //to set player's names, and remove the input field upon clicking button

    const playerXDisplay = document.querySelector(".player-x-form");

    const playerODisplay = document.querySelector(".player-o-form");
   
    const playerXButton = document.querySelector(".player-x-button");
   
    const playerOButton = document.querySelector(".player-o-button");


    function handleXButton(e) {
        playerXDisplay.style.display = "none"
      }
    
    function handleOButton(e) {
        playerODisplay.style.display = "none"
      }
    
    function handlePlayerX(e) {
          setPlayerX(e.target.value)    
      }
    
    function handlePlayerO(e) {
        setPlayerO(e.target.value)    
    }


  
  

    // stores winner calculation in winner.
    const winner = calculateWinner(squares);

    //initialize status
    let status;

      //function to decide if it should display who is next. 

    function handleClick(i) {
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        const nextSquares = squares.slice();
        if (xIsNext) {
            nextSquares[i] = 'X';
            
        
        }  else {
            nextSquares[i] = 'O';
        }
        onPlay(nextSquares);
        
        
    }

   

    // if else statement to establish status, is there a winner? / who's turn is it?

    if (winner && !xIsNext) {
        status = playerX + ' WON!';
    } else if (winner && xIsNext) {
        status = playerO + ' WON!';
    } else {
        status = 'Next player: ' + (xIsNext ? playerX : playerO);    }


        function handleRestart(e) {
            const squareContent = document.querySelectorAll(".board")
           
            
            
          for (let i = 0; i < squares.length; i++) {
                
                squares[i] = null;
                console.log('cleared!')
                
                
            }  
            
            console.log(squares)
            
            
            
        }

        

    

  return (
    <div className="container">
        <h1>TIC TAC TOE!</h1>
       
        <div className="user-input-container">


            <label
            className="player-x-form"
            >player X:

                <input 
                name="player-x"
                className="player-x-form"
                type="text"
                
                value={playerX}
                onChange={handlePlayerX}
                />
                
                <button
                
                className="player-x-button player-x-form"
                name="player-x"
                type="submit" 
                 
                value={playerO} 
                onClick={(e) => handleXButton(e)}>
                ready

                </button>
            
            </label>

            <br/>
    
    

            <label className="player-o-form">player O: 

                <input 
                name="player-o" 
                type="text" 
                value={playerO}
                className="player-o-form"
                onChange={handlePlayerO}
                />
                
                <button
                className="player-o-button player-o-form" 
                onClick={(e) => handleOButton(e)}
                >
                ready
                </button>

            </label>

        </div>

        <div className="status">{status}</div>

        <div className="board">

            <div className= "board-row">

                <Square 
                className="row-1" 
                value={squares[0]} onSquareClick={() => handleClick(0)} 
                />

                <Square 
                className="row-1" 
                value={squares[1]} onSquareClick={() => handleClick(1)} 
                />

                <Square 
                className="row-1" 
                value={squares[2]} onSquareClick={() => handleClick(2)} 
                />

            </div>


            <div className= "board-row">

                <Square 
                className="row-2 squareBox" 
                value={squares[3]} onSquareClick={() => handleClick(3)} 
                />

                <Square 
                className="row-2 squareBox" 
                value={squares[4]} onSquareClick={() => handleClick(4)} 
                />

                <Square 
                className="row-2 squareBox" 
                value={squares[5]} onSquareClick={() => handleClick(5)} 
                />

            </div>

            <div className= "board-row">

                <Square 
                className="row-3 squareBox" 
                value={squares[6]} onSquareClick={() => handleClick(6)} 
                />

                <Square 
                className="row-3 squareBox" 
                value={squares[7]} onSquareClick={() => handleClick(7)} 
                />

                <Square 
                className="row-3 squareBox" 
                value={squares[8]} onSquareClick={() => handleClick(8)} 
                />

            </div>
            
            
        </div>
        
        <p>refresh to play again!</p>
        <footer>Made By: 
            <a href="https://github.com/marywilder">Mary Wilder</a>
            <br>
            </br>using <a><i>React</i></a>
        </footer>
        

    </div>
  )
}

export default Board


