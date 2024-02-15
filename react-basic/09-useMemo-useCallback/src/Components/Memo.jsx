import { useMemo, useState } from "react"

function Memo() {
    let [count, setCount] = useState(10);
    let [input, setInput] = useState(0);
    function handleChange(e) {
        setInput(e.target.value);
    }

    let memoAns = useMemo(() => {
        let ans = 0;
        for (let i = 1; i <= input; i++) {
            console.log('ji');
            ans += i;
        }
        return ans;
    }, [input])

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Click-{count}</button>
            <input type="number" name="" id="" onChange={handleChange} value={input} />
            <h2>Sum: {memoAns}</h2>
        </div>
    )
}

export default Memo