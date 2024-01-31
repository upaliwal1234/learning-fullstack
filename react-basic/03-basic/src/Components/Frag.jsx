import React, { useState } from "react";

function Frag() {
    let [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <React.Fragment>
            <div>
                <button onClick={handleClick}>INCREASE - {count}</button>
            </div>
        </React.Fragment>
    )
}

export default Frag