import styles from "./styles.module.scss";
import Icon from "@mdi/react";
import { mdiCheckboxOutline, mdiPlayBoxOutline, mdiShuffle, mdiRefresh } from "@mdi/js";

import { useContext } from "react";
import { AppContext, Element } from "../../App";

export default function Navbar() {

    const { visualize, solve, newBoard, setBoard, reset } = useContext(AppContext);

    const changeBoard = () => {
        newBoard().then((board: Element[][]) => setBoard(board));
    }

    return (
        <div className={styles.container}>
            <div className={styles.tile} onClick={() => visualize()}>
                <Icon path={mdiPlayBoxOutline} size={0.7} />
                <p className={styles.label}>
                    Visualize
                </p>
            </div>
            <div className={styles.tile} onClick={() => solve()}>
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
            <div className={styles.tile} onClick={() => reset()}>
                <Icon path={mdiRefresh} size={0.7} />
                <p className={styles.label}>
                    Reset
                </p></div>
        </div>
    )
}