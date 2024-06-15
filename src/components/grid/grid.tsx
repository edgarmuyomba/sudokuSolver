import styles from "./styles.module.scss";
import boardToGrid from "../../utils/boardToGrid";

import { useContext, useEffect, useState } from "react";
import { AppContext, Element } from "../../App";

export default function Grid() {

    const { board } = useContext(AppContext);

    const [grid, setGrid] = useState<Element[][]>([]);

    useEffect(() => {
        let formattedBoard = boardToGrid(board);
        setGrid(formattedBoard);
    }, [board]);

    return (
        <div className={styles.container}>
            {
                grid.map((group, index) => {
                    return (
                        <div className={styles.group} key={index}>
                            {
                                group.map((cell, index2) => {
                                    return (
                                        <div key={index2} className={`${styles.cell} ${cell.valid === true ? styles.valid : cell.valid === false ? styles.invalid : null} ${cell.init && styles.init}`}>{cell.value ?? '_'}</div>
                                    )
                                })
                            }
                        </div>
                    )
                })
            }
            {/* <div className={styles.group}>
                <div className={styles.cell}>1</div>
                <div className={styles.cell}>2</div>
                <div className={styles.cell}>3</div>
                <div className={`${styles.cell} ${styles.valid}`}>4</div>
                <div className={styles.cell}>5</div>
                <div className={`${styles.cell} ${styles.invalid}`}>6</div>
                <div className={styles.cell}>7</div>
                <div className={styles.cell}>8</div>
                <div className={styles.cell}>9</div>
            </div>
            <div className={styles.group}>
                <div className={`${styles.cell} ${styles.valid}`}>1</div>
                <div className={styles.cell}>2</div>
                <div className={styles.cell}>3</div>
                <div className={`${styles.cell} ${styles.invalid}`}>4</div>
                <div className={styles.cell}>5</div>
                <div className={styles.cell}>6</div>
                <div className={`${styles.cell} ${styles.init}`}>7</div>
                <div className={styles.cell}>8</div>
                <div className={styles.cell}>9</div>
            </div> */}
        </div>
    )
}