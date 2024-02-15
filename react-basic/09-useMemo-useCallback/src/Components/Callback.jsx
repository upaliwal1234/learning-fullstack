/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import { memo, useCallback, useState } from "react"

function Callback() {
    let [count, setCount] = useState(0);

    // let a = 10;
    let a = useCallback(() => {
        console.log('hello');
    }, []);

    return (
        <div>
            <Demo b={a} />
            <button onClick={() => setCount(count + 1)}>Count: {count}</button>
        </div>
    )
}

let Demo = memo(function ({ b }) {
    return (
        <div>
            <h1>{b()}</h1>
        </div>
    )
})

export default Callback