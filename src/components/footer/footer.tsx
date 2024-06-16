import styles from "./styles.module.scss";

export default function Footer() {
    return (
        <div className={styles.container}>
            <p className={styles.text}>
                Copyright &copy; 
            </p>
            <a href="http://edgar-muyomba.vercel.app">Edgar Muyomba</a>
        </div>
    )
}