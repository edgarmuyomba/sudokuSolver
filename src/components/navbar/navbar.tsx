import styles from "./styles.module.scss";
import Icon from "@mdi/react";
import { mdiCheckboxOutline, mdiPlayBoxOutline, mdiRefresh } from "@mdi/js";

export default function Navbar() {
    return (
        <div className={styles.container}>
            <div className={styles.tile}>
                <Icon path={mdiPlayBoxOutline} size={0.7} />
                <p className={styles.label}>
                    Visualize
                </p>
            </div>
            <div className={styles.tile}>
                <Icon path={mdiCheckboxOutline} size={0.7} />
                <p className={styles.label}>
                    Solve
                </p>
            </div>
            <div className={styles.tile}>
                <Icon path={mdiRefresh} size={0.7} />
                <p className={styles.label}>
                    Reset
                </p></div>
        </div>
    )
}