import styles from "./styles.module.scss";
import Icon from "@mdi/react";
import { mdiCheckboxOutline, mdiPlayBoxOutline, mdiShuffle } from "@mdi/js";

import { useContext, useState } from "react";
import { AppContext, Element } from "../../App";
import solveSudoku from "../../algorithm/solver";

export default function Navbar() {

    const { visualize, newBoard, setBoard, setSolving, board, setTime, disabled, setDisabled } = useContext(AppContext);

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

    return (
        <div className={styles.container}>
            <div style={{ color: `${disabled ? 'lightgray' : ''}` }} className={styles.tile} onClick={disabled ? () => { } : steps.length > 0 ? () => visualize(setTime, setBoard, setSolving, steps, setDisabled) : () => { }}>
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
            {/* when users are able to input their own values */}
            {/* <div className={styles.tile} onClick={() => reset()}>
                <Icon path={mdiRefresh} size={0.7} />
                <p className={styles.label}>
                    Reset
                </p></div> */}
        </div>
    )
}