import { useState } from "react"

function Questions() {
    let [count, setCount] = useState(0);
    console.log('render');
    console.log(count);
    function handleClick() {
        // batching
        setCount(count + 1)
        setCount(count + 2)
        setCount(count + 1) //always last executed setState works 
    }

    return (
        <div>
            <button onClick={handleClick}>Count: {count}</button>
        </div>
    )
}

export default Questions