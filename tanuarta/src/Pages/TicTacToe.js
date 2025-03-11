import { useState } from 'react';
import './TicTacToe.css';

function TicTacToe() {

  const [board, setBoard] = useState(Array(3).fill('').map(() => Array(3).fill('')));
  const [turn, setTurn] = useState('X')
  const [turnQueue, setQueue] = useState([])

  // Check row, column, diagonals of latest move
  // Verify all corresponding squares are equal
  const checkWin = (xIndex, yIndex) => {
    console.log('Checking Win')
    console.log('x = ' + xIndex)
    console.log('y = ' + yIndex)

    // Check if row is a win
    for (let y = 0; y < board.length; y++) {
      if (board[xIndex][y] !== turn) break;
      else if (y === board.length - 1) return true; 
    }

    // Check if column is a win
    for (let x = 0; x < board.length; x++) {
      if (board[x][yIndex] !== turn) break;
      else if (x === board.length - 1) return true;
    }

    // Check diagonal
    if (xIndex === yIndex) {
      for (let a = 0; a < board.length; a++) {
        if (board[a][a] !== turn) break;
        else if (a === board.length - 1) return true;
      }
    }

    // Check anti-diagonal
    if (parseInt(xIndex) + parseInt(yIndex) === 2) {
      for (let a = 0; a < board.length; a++) {
        if (board[a][2 - a] !== turn) break;
        else if (a === board.length - 1) return true; 
      }
    }

    return false
  }

  // Clear move that has opacity at 50% before clearing everything else
  const reset = () => {
    let queue = [...turnQueue]

    const removeTurn = queue.shift()
    let box = document.getElementById(removeTurn[0] + removeTurn[1])
    box.className = 'box'
    
    setQueue([])
    setTurn('X')
    setBoard(Array(3).fill('').map(() => Array(3).fill('')))
    
  }
 
  const move = (e) => {
    const xIndex = e.target.getAttribute('x-index');
    const yIndex = e.target.getAttribute('y-index');

    // Prevent clicking on occupied square
    if (board[xIndex][yIndex] !== '') return
    
    
    // Create shallow copies to change state
    let newBoard = [...board]
    let queue = [...turnQueue]
    newBoard[xIndex][yIndex] = turn

    // Change opacity of next cleared square
    if (queue.length === 5) {
      const xCord = queue[0][0]
      const yCord = queue[0][1]

      let box = document.getElementById(xCord + yCord)
      box.className = box.className + ' to-go'
    }

    // Remove a move, and return opacity back to normal
    if (queue.length > 5) {
      const removeTurn = queue.shift()
      newBoard[removeTurn[0]][removeTurn[1]] = ''

      const xCord = queue[0][0]
      const yCord = queue[0][1]

      let box = document.getElementById(xCord + yCord)
      box.className = box.className + ' to-go'

      box = document.getElementById(removeTurn[0] + removeTurn[1])
      console.log(box)
      box.className = 'box'
    }
    
    setBoard(newBoard)
    queue.push([xIndex, yIndex])
    setQueue(queue)

    if (checkWin(xIndex, yIndex)) {
      alert('You Win!');
    }

    if (turn === 'X') setTurn('O');
    else setTurn('X')
  }

  return (
    <div className="main">

      <span className='title'>
        TicTacToe
      </span>

      <span className='turn-text'>
        It's {turn}'s' turn
      </span>

      <div className='board'>
        {
          board.map((content, x) =>
            content.map((symbol, y) => 
              <div className='box' onClick={move} id={x.toString() + y.toString()} key={x.toString() + y.toString()} x-index={x} y-index={y}>{symbol}</div>
            )
          )
        }
      </div>

      <button className='reset-button' onClick={reset}>Reset</button>
    </div>
  );
}

export default TicTacToe;
