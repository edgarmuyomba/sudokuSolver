import { Element } from "../App";

export default async function visualize(setTime: (time: string) => void, setBoard: (board: Element[][]) => void, setSolving: (solving: boolean) => void, solvingSteps: Element[][][], setDisabled: (disabled: boolean) => void): Promise<void> {
    // clear
    setTime("00:000");
    setDisabled(true);
    setBoard([]);
    setSolving(true);

    // animate
    for (let step of solvingSteps) {
        setBoard(step);
        await new Promise(resolve => setTimeout(resolve, 300));
    }

    setSolving(false);
    setDisabled(false);
}