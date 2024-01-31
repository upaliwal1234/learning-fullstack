import { useState } from "react"

/* eslint-disable react/prop-types */
function Todo() {

    let [t, setT] = useState("GYM")
    function changeTodo() {
        setT(Math.floor(Math.random() * 10))
    }
    return (
        <div>
            <ShowTodo title={t} desc="kal se" />
            <button onClick={changeTodo}>change</button>
            <ShowTodo title="REACT" desc="aaj se react" />
            <ShowTodo title="placement" desc="bilkul" />
        </div>
    )
}

function ShowTodo({ title, desc }) {
    return (
        <>
            <h2>Title: {title}</h2>
            <h2>Description: {desc}</h2>
        </>
    )
}

export default Todo