import { useState } from 'react'

function Inter() {
    let [count, setCount] = useState(0);
    function handleClick() {
        // setCount(count+1)
        // setCount(count+1)

        setCount((x) => x + 1)
        setCount((y) => y + 1)
    }
    return (
        <div>
            <button onClick={handleClick}>Counter: {count}</button>
        </div>
    )
}

export default Inter