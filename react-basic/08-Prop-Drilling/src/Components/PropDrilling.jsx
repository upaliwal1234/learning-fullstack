/* eslint-disable react/prop-types */
import { useState } from "react"

function PropDrilling() {
    let [count, setCount] = useState(0);
    return (
        <div>
            <Counting count={count} />
            <Buttons count={count} setCount={setCount} />
        </div>
    )
}

function Counting({ count }) {
    return (
        <div>
            <h1>Count- {count}</h1>
        </div>
    )
}
function Buttons({ count, setCount }) {
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>inc</button>
            <button onClick={() => setCount(count - 1)}>dec</button>
        </div>
    )
}


export default PropDrilling