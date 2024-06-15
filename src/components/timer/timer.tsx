import styles from "./styles.module.scss";

export default function Timer() {
    return (
        <div className={styles.container}>
            <p className={styles.text}>
                1:00:345 <span>ms</span>
            </p>
        </div>
    )
}