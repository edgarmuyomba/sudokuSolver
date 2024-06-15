import styles from "./styles.module.scss";

export default function Grid() {
    return (
        <div className={styles.container}>
            <div className={styles.group}>
                <div className={styles.cell}>1</div>
                <div className={`${styles.cell} ${styles.init}`}>2</div>
                <div className={styles.cell}>3</div>
                <div className={styles.cell}>4</div>
                <div className={styles.cell}>5</div>
                <div className={`${styles.cell} ${styles.init}`}>6</div>
                <div className={styles.cell}>7</div>
                <div className={styles.cell}>8</div>
                <div className={styles.cell}>9</div>
            </div>
            <div className={styles.group}>
                <div className={styles.cell}>1</div>
                <div className={styles.cell}>2</div>
                <div className={styles.cell}>3</div>
                <div className={styles.cell}>4</div>
                <div className={styles.cell}>5</div>
                <div className={styles.cell}>6</div>
                <div className={styles.cell}>7</div>
                <div className={styles.cell}>8</div>
                <div className={styles.cell}>9</div>
            </div>
            <div className={styles.group}>
                <div className={styles.cell}>1</div>
                <div className={styles.cell}>2</div>
                <div className={styles.cell}>3</div>
                <div className={`${styles.cell} ${styles.init}`}>4</div>
                <div className={styles.cell}>5</div>
                <div className={styles.cell}>6</div>
                <div className={styles.cell}>7</div>
                <div className={styles.cell}>8</div>
                <div className={`${styles.cell} ${styles.init}`}>9</div>
            </div>
            <div className={styles.group}>
                <div className={styles.cell}>1</div>
                <div className={styles.cell}>2</div>
                <div className={styles.cell}>3</div>
                <div className={`${styles.cell} ${styles.valid}`}>4</div>
                <div className={`${styles.cell} ${styles.init}`}>5</div>
                <div className={styles.cell}>6</div>
                <div className={styles.cell}>7</div>
                <div className={styles.cell}>8</div>
                <div className={`${styles.cell} ${styles.valid}`}>9</div>
            </div>
            <div className={styles.group}>
                <div className={styles.cell}>1</div>
                <div className={styles.cell}>2</div>
                <div className={styles.cell}>3</div>
                <div className={styles.cell}>4</div>
                <div className={styles.cell}>5</div>
                <div className={styles.cell}>6</div>
                <div className={styles.cell}>7</div>
                <div className={styles.cell}>8</div>
                <div className={styles.cell}>9</div>
            </div>
            <div className={styles.group}>
                <div className={styles.cell}>1</div>
                <div className={styles.cell}>2</div>
                <div className={styles.cell}>3</div>
                <div className={styles.cell}>4</div>
                <div className={styles.cell}>5</div>
                <div className={styles.cell}>6</div>
                <div className={styles.cell}>7</div>
                <div className={styles.cell}>8</div>
                <div className={styles.cell}>9</div>
            </div>
            <div className={styles.group}>
                <div className={styles.cell}>1</div>
                <div className={styles.cell}>2</div>
                <div className={styles.cell}>3</div>
                <div className={styles.cell}>4</div>
                <div className={`${styles.cell} ${styles.init}`}>5</div>
                <div className={styles.cell}>6</div>
                <div className={styles.cell}>7</div>
                <div className={styles.cell}>8</div>
                <div className={styles.cell}>9</div>
            </div>
            <div className={styles.group}>
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
                <div className={`${styles.cell} ${styles.valid}`}>7</div>
                <div className={styles.cell}>8</div>
                <div className={styles.cell}>9</div>
            </div>
        </div>
    )
}