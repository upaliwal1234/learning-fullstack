import { useEffect, useState } from "react"

function Timer() {
    let [timer, setTimer] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(() => {
            if (timer < 40) {
                setTimer(timer + 1);
            }
        }, 1000);
        return () => clearInterval(intervalId);
    }, [timer])

    return (
        <div>Timer: {timer}</div>
    )
}

export default Timer