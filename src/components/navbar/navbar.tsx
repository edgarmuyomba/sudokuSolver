import styles from "./styles.module.scss";
import Icon from "@mdi/react";
import { mdiCheckboxOutline, mdiPlayBoxOutline, mdiShuffle } from "@mdi/js";

import { useContext, useState } from "react";
import { AppContext, Element } from "../../App";
import solveSudoku from "../../algorithm/solver";

export default function Navbar() {

    const { visualize, newBoard, setBoard, setSolving, board, setTime } = useContext(AppContext);

    const [steps, setSteps] = useState<Element[][][]>([]);

    const changeBoard = () => {
        setTime("00:000")
        newBoard().then((board: Element[][]) => setBoard(board));
    }

    const handleSolve = () => {

        setSolving(true);

        let tmpBoard = [...board];
        let solvingSteps = solveSudoku(tmpBoard);
        setSteps(solvingSteps);

        console.log(solvingSteps[5]);
        

        setBoard(tmpBoard);

        setTimeout(() =>
            setSolving(false), 50);
    }

    return (
        <div className={styles.container}>
            <div className={styles.tile} onClick={steps.length > 0 ? () => visualize(setTime, setBoard, setSolving, steps) : () => {}}>
                <Icon path={mdiPlayBoxOutline} size={0.7} />
                <p className={styles.label}>
                    Visualize
                </p>
            </div>
            <div className={styles.tile} onClick={() => handleSolve()}>
                <Icon path={mdiCheckboxOutline} size={0.7} />
                <p className={styles.label}>
                    Solve
                </p>
            </div>
            <div className={styles.tile} onClick={() => changeBoard()}>
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