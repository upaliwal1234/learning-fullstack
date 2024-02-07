/* eslint-disable react/display-name */
import { memo, useState } from "react"

/* eslint-disable react/prop-types */
function Memoo() {
    let [t, setT] = useState("Chitthi aayi hai");
    // do not use empty and fragment tags while using memo
    return (
        <div>
            <MyMemo titl={t} />
            <button onClick={() => setT(Math.floor(Math.random() * 10))}>click</button>
            <MyMemo titl="memo seekh lo" />
            <MyMemo titl="memo seekh lo 3" />
        </div>
    )
}

// function MyMemo({ titl }) {
//     return (
//         <div>
//             <h1>Title: {titl}</h1>
//         </div>
//     )
// }

let MyMemo = memo(
    function ({ titl }) {
        return (
            <div>
                <h1>Title: {titl}</h1>
            </div>
        )
    }
)

// memo (memoisation) is used to 

export default Memoo