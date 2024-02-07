import { useState } from "react"

/* eslint-disable react/prop-types */
function Todo() {
    return (
        <div>
            <Show titl="Baarish aa rahi hai" />
            <BadaShow titl="Baarish ruk gyi" />
        </div>
    )
}

function Show({ titl }) {
    return (
        <div>
            <h1>Title: {titl}</h1>
        </div>
    )
}

function BadaShow({ titl }) {
    let [t, setT] = useState(titl)
    function handleClick() {
        setT(Math.floor(Math.random() * 10));
    }
    return (
        <div>
            <Show titl={t} />
            <button onClick={handleClick}>Click</button>
        </div>
    )
}

export default Todo