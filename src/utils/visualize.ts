import { Element, Speed } from "../App";

export default async function visualize(setTime: (time: string) => void, setBoard: (board: Element[][]) => void, setSolving: (solving: boolean) => void, solvingSteps: Element[][][], setDisabled: (disabled: boolean) => void, speed: Speed): Promise<void> {
    // clear
    setTime("00:000");
    setDisabled(true);
    setBoard([]);
    // setSolving(true);

    // time
    let wait = 50;

    switch(speed) {
        case Speed.Slow:
            wait = 200;
            break;
        case Speed.Medium:
            wait = 100;
            break;
        default:
            wait = 50;
    }

    // animate
    for (let step of solvingSteps) {
        setBoard(step);
        await new Promise(resolve => setTimeout(resolve, wait));
    }

    // setSolving(false);
    setDisabled(false);
}