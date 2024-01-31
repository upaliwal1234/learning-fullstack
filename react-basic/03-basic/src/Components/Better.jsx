/* eslint-disable react/prop-types */
import { useState } from 'react'

function Better() {
    return (
        <div>
            <ChangeTodos titl="Hello" />
            <Todos titl="Hi 1" />
            <Todos titl="Hi 2" />
            <Todos titl="Hi 3" />
        </div>
    )
}

function Todos({ titl }) {
    return (
        <>
            <h2>Title: {titl}</h2>
        </>
    )
}

function ChangeTodos({ titl }) {
    let [t, setT] = useState(titl);
    function handleChange() {
        setT(Math.floor(Math.random() * 10));
    }
    return (
        <>
            <h2>Title: {t}</h2>
            <button onClick={handleChange}>Change</button>
        </>
    )
}

export default Better