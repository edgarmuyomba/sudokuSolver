import { AppContext } from "../../App";
import styles from "./styles.module.scss";

import { useContext, useEffect, useState } from "react";

export default function Timer() {

    const { time, setTime, solving } = useContext(AppContext);

    const [min, setMin] = useState(0);
    const [sec, setSec] = useState(0);
    const [ms, setMs] = useState(0);

    const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

    useEffect(() => {
        
        if (solving) {
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
        setMs(prevMs => {
            let _ms = prevMs + 1;
            let _sec = sec;
            let _min = min;

            if (_ms === 1000) {
                _sec += 1;
                _ms = 0;
            }

            if (_sec === 60) {
                _min += 1;
                _sec = 0;
            }

            let newTime = '';
            newTime += `${_min}:`;
            newTime += `${_sec.toString().padStart(2, '0')}:`;
            newTime += `${_ms.toString().padStart(3, '0')}`;

            setTime(newTime);

            setSec(_sec);
            setMin(_min);
            setMs(_ms);

            return _ms;
        });
    };

    return (
        <div className={styles.container}>
            <p className={styles.text}>
                {time} <span>ms</span>
            </p>
        </div>
    )
}