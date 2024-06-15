import './App.scss'
import Grid from './components/grid/grid'
import Header from './components/header/header'
import Navbar from './components/navbar/navbar'
import Timer from './components/timer/timer'

import { createContext, useState } from 'react';
import newBoard from './utils/newBoard'
import visualize from './utils/visualize'
import solve from './utils/solve'
import reset from './utils/reset'

export const AppContext = createContext({
  newBoard: () => { },
  board: [],
  visualize: () => { },
  solve: () => { },
  reset: () => { },
  solving: false
});

function App() {

  const [board, setBoard] = useState([]);
  const [solving, setSolving] = useState(false);

  return (
    <AppContext.Provider value={{ newBoard: newBoard, board: board, solving: solving, visualize: visualize, solve: solve, reset: reset }}>
      <Header />
      <Timer />
      <Grid />
      <Navbar />
    </AppContext.Provider>
  )
}

export default App
