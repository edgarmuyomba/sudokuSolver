import './App.scss'
import Grid from './components/grid/grid'
import Header from './components/header/header'
import Navbar from './components/navbar/navbar'
import Timer from './components/timer/timer'

import { createContext, useState, useEffect } from 'react';
import visualize from './utils/visualize'
import solve from './utils/solve'
import reset from './utils/reset'
import newBoard from './utils/newBoard'

interface APP {
  newBoard: () => Promise<Element[][]>;
  board: Element[][];
  setBoard: (board: Element[][]) => void;
  visualize: () => void;
  solve: () => void;
  reset: () => void;
  solving: boolean;
  time: string;
}

export interface Element {
  value: number | null,
  valid: boolean | null,
  init: boolean | null,
}

export const AppContext = createContext<APP>({
  newBoard: async () => { return []; },
  board: [],
  setBoard: () => { },
  visualize: () => { },
  solve: () => { },
  reset: () => { },
  solving: false,
  time: ""
});

function App() {

  const [board, setBoard] = useState<Element[][]>([[]]);
  const [solving, setSolving] = useState(false);
  const [time, setTime] = useState("0:00:000");

  useEffect(() => {
    // create new board first time

    newBoard().then((_board) => setBoard(_board));

  }, []);

  return (
    <AppContext.Provider value={{ newBoard: newBoard, board: board, setBoard: setBoard, solving: solving, visualize: visualize, solve: solve, reset: reset, time: time }}>
      <Header />
      <Timer />
      <Grid />
      <Navbar />
    </AppContext.Provider>
  )
}

export default App
