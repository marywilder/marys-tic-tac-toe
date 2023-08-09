import React from 'react'
import { useState } from 'react'
import Board from './Board';


function Game() {
    //an empty array that records moves
    const [history, setHistory] = useState([Array(9).fill(null)]);

    //keeps track of current move
    const [currentMove, setCurrentMove] = useState(0);

    
    //defines that it is x's turn in the current move is an even number
    const xIsNext = currentMove % 2 === 0;

    // stores the current move/square as the index of the history array
    const currentSquares = history[currentMove];

    
    //function that takes nextSquares variable defined in Board and
    function handlePlay(nextSquares) {

        //defines varaible which is an array .. the 0 index is the current move/history and the 1 index is the next selected square
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];


        //sets history to the most recent move
        setHistory(nextHistory);


        //sets current move to one less than the history array because it hasnt happened yet
        setCurrentMove(nextHistory.length - 1);
    }

    //function that allows you to go to a different move
    function jumpTo(nextMove) {
        
        setCurrentMove(nextMove);
    }

    const moves = history.map((squares, move) => {

        let description;
        if (move > 0) {
            description = 'Go to move #' + move;
        }

        else {
            description = 'Go to game start';
        }

        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>
                    {description}
                </button>
            </li>
        )

    })

    
    


  return (
    <div className="game" >
   
          
           
            <Board 
            xIsNext={xIsNext} 
            squares={currentSquares} 
            onPlay={handlePlay} 
            />
           

         

          

          

    </div>
  )
}

export default Game