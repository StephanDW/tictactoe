import { useState } from 'react'
import './App.css'
import Board from './components/Board'

function App() {
  const [gameStarted, setGameStarted] = useState(false)

  const launch_game = (event) => {
    event.preventDefault()
    setGameStarted(true)
  }

  return (
    <>
      <Board />
    </>
  )
}

export default App