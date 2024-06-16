import { AppContext } from "../../App";
import styles from "./styles.module.scss";

import { useContext, useEffect, useRef, useState } from "react";

export default function Timer() {

    const { time, setTime, solving } = useContext(AppContext);

    const startTimeRef = useRef<number | null>(null);

    const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

    useEffect(() => {

        if (solving) {
            startTimeRef.current = performance.now();
            const _intervalId = setInterval(() => incrementTime(), 1);
            setIntervalId(_intervalId);
        } else if (intervalId) {
            clearInterval(intervalId);
            setIntervalId(null);
        }

        // Cleanup interval on component unmount
        return () => {
            if (intervalId) clearInterval(intervalId);
        };

    }, [solving]);


    const incrementTime = () => {
        if (startTimeRef.current !== null) {
            const elapsed = performance.now() - startTimeRef.current;
            const totalMicroseconds = elapsed * 1000; // Convert milliseconds to microseconds

            const ms = Math.floor(elapsed); // Milliseconds
            const mi = Math.floor((totalMicroseconds % 1000)); // Microseconds

            let newTime = '';
            newTime += `${ms.toString().padStart(2, '0')}:`;
            newTime += `${mi.toString().padStart(3, '0')}`;

            setTime(newTime);
        }
    };

    return (
        <div className={styles.container}>
            <p className={styles.text}>
                {time} <span></span>
            </p>
        </div>
    )
}