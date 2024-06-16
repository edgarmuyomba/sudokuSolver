import './App.scss'
import Grid from './components/grid/grid'
import Header from './components/header/header'
import Navbar from './components/navbar/navbar'
import Timer from './components/timer/timer'

import { createContext, useState, useEffect } from 'react';
import visualize from './utils/visualize'
import reset from './utils/reset'
import newBoard from './utils/newBoard'

interface APP {
  newBoard: () => Promise<Element[][]>;
  board: Element[][];
  setBoard: (board: Element[][]) => void;
  visualize: (setTime: (time: string) => void, setBoard: (board: Element[][]) => void, setSolving: (solving: boolean) => void, solvingSteps: Element[][][]) => void;
  reset: () => void;
  solving: boolean;
  setSolving: (solving: boolean) => void,
  time: string;
  setTime: (time: string) => void;
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
  reset: () => { },
  solving: false,
  setSolving: () => { },
  time: "",
  setTime: () => { }
});

function App() {

  const [board, setBoard] = useState<Element[][]>([[]]);
  const [solving, setSolving] = useState(false);
  const [time, setTime] = useState("00:000");

  useEffect(() => {
    // create new board first time

    newBoard().then((_board) => setBoard(_board));

  }, []);

  return (
    <AppContext.Provider value={{ newBoard: newBoard, board: board, setBoard: setBoard, solving: solving, setSolving: setSolving, visualize: visualize, reset: reset, time: time, setTime: setTime }}>
      <Header />
      <Timer />
      <Grid />
      <Navbar />
    </AppContext.Provider>
  )
}

export default App
