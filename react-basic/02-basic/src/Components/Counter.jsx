import { useState } from "react"
function Counter() {
    let [counter, setCounter] = useState(0);
    let handleChange = () => {
        setCounter(counter + 1);
    }
    return (
        <div>
            <button onClick={handleChange}>Count: {counter}</button>
        </div>
    )
}

export default Counter