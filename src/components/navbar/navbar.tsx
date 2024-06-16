import styles from "./styles.module.scss";
import Icon from "@mdi/react";
import { mdiCheckboxOutline, mdiPlayBoxOutline, mdiShuffle, mdiTimerOutline } from "@mdi/js";

import { useContext, useState } from "react";
import { AppContext, Element, Speed } from "../../App";
import solveSudoku from "../../algorithm/solver";

export default function Navbar() {

    const { visualize, newBoard, setBoard, setSolving, board, setTime, disabled, setDisabled, setSpeed, speed } = useContext(AppContext);

    const [steps, setSteps] = useState<Element[][][]>([]);

    const changeBoard = () => {
        setTime("00:000")
        newBoard().then((board: Element[][]) => setBoard(board));
    }

    const handleSolve = () => {

        setDisabled(true);

        setSolving(true);

        let tmpBoard = [...board];
        let solvingSteps = solveSudoku(tmpBoard);
        setSteps(solvingSteps);

        console.log(solvingSteps[5]);


        setBoard(tmpBoard);

        setTimeout(() =>
            setSolving(false), 50);

        setDisabled(false);
    }

    const changeSpeed = (event: React.ChangeEvent<HTMLSelectElement>) => {
        let value = event.target.value;
        if (value === 'Fast') {
            setSpeed(Speed.Fast);
        } else if (value === 'Medium') {
            setSpeed(Speed.Medium);
        } else {
            setSpeed(Speed.Slow);
        }
    }

    return (
        <div className={styles.container}>
            <div style={{ color: `${disabled ? 'lightgray' : ''}` }} className={styles.tile}>
                <Icon path={mdiTimerOutline} size={0.7} />
                <select name="speed" id="speed" disabled={disabled} onChange={changeSpeed}>
                    <option value={Speed.Fast} selected>Fast</option>
                    <option value={Speed.Medium}>Medium</option>
                    <option value={Speed.Slow}>Slow</option>
                </select>
            </div>
            <div style={{ color: `${disabled ? 'lightgray' : ''}` }} className={styles.tile} onClick={disabled ? () => { } : steps.length > 0 ? () => visualize(setTime, setBoard, setSolving, steps, setDisabled, speed) : () => { }}>
                <Icon path={mdiPlayBoxOutline} size={0.7} />
                <p className={styles.label}>
                    Visualize
                </p>
            </div>
            <div style={{ color: `${disabled ? 'lightgray' : ''}` }} className={styles.tile} onClick={disabled ? () => { } : () => handleSolve()}>
                <Icon path={mdiCheckboxOutline} size={0.7} />
                <p className={styles.label}>
                    Solve
                </p>
            </div>
            <div style={{ color: `${disabled ? 'lightgray' : ''}` }} className={styles.tile} onClick={disabled ? () => { } : () => changeBoard()}>
                <Icon path={mdiShuffle} size={0.7} />
                <p className={styles.label}>
                    Random
                </p></div>
        </div>
    )
}