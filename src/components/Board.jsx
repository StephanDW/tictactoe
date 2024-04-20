import { useState, useEffect } from 'react'
import './Board.css'

const winningCombos = [
  {combo: [0, 1, 2]},
  {combo: [3, 4, 5]},
  {combo: [6, 7, 8]},

  {combo: [0, 3, 6]},
  {combo: [1, 4, 7]},
  {combo: [2, 5, 8]},

  {combo: [0, 4, 8]},
  {combo: [2, 4, 6]},
];

function checkWinner(board) {
  for(const {combo} of winningCombos){
    const mark1 = board[combo[0]];
    const mark2 = board[combo[1]];
    const mark3 = board[combo[2]];

    if (
      mark1 !== null &&
      mark1 === mark2 &&
      mark1 === mark3
    ) {
      return "The winner is " + mark1;
    }
  }
  return null;
}

function Board() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState('X');
  const [winner, setWinner] = useState(null);

  const move = (index) => {
    if (board[index] === null && !winner){
      const newBoard = [...board];
      newBoard[index] = turn;
      setBoard(newBoard);
      setTurn(turn === 'X' ? 'O' : 'X')
    }
  }

  const reset = () => {
    setBoard(Array(9).fill(null));
    setTurn('X');
    setWinner(null);
  }

  useEffect(() => {
    setWinner(checkWinner(board));
  });

  return (
    <section>
      <div className='title'>Tic Tac Toe</div>
      <div className='turn_txt' id={turn}>Player {turn}'s turn</div>
      <div className="board">
        <div className="box br bb"><button id={ board[0] } className='move_btn' onClick={() => move(0)}>{ board[0] }</button></div>
        <div className="box br bb"><button id={ board[1] } className='move_btn' onClick={() => move(1)}>{ board[1] }</button></div>
        <div className="box bb"><button id={ board[2] } className='move_btn' onClick={() => move(2)}>{ board[2] }</button></div>
        <div className="box br bb"><button id={ board[3] } className='move_btn' onClick={() => move(3)}>{ board[3] }</button></div>
        <div className="box br bb"><button id={ board[4] } className='move_btn' onClick={() => move(4)}>{ board[4] }</button></div>
        <div className="box bb"><button id={ board[5] } className='move_btn' onClick={() => move(5)}>{ board[5] }</button></div>
        <div className="box br"><button id={ board[6] } className='move_btn' onClick={() => move(6)}>{ board[6] }</button></div>
        <div className="box br"><button id={ board[7] } className='move_btn' onClick={() => move(7)}>{ board[7] }</button></div>
        <div className="box"><button id={ board[8] } className='move_btn' onClick={() => move(8)}>{ board[8] }</button></div>
      </div>
      <div className='win_msg'>{ winner }</div>
      <button className='start_game_btn' onClick={() => reset()}>Reset Game</button>
    </section>
  )
}

export default Board