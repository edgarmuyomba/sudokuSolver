import { AppContext } from "../../App";
import styles from "./styles.module.scss";

import { useContext } from "react";

export default function Timer() {

    const { time } = useContext(AppContext);

    return (
        <div className={styles.container}>
            <p className={styles.text}>
                {time} <span>ms</span>
            </p>
        </div>
    )
}