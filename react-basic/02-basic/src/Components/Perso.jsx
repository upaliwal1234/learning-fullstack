function Perso() {
    function handleClick() {
        console.log("click");
    }
    function handleClick2(id) {
        console.log(id);
    }
    return (
        <div>
            <button onClick={handleClick}>Click</button>
            <div>
                <button onClick={() => handleClick2(100)}>Click2</button>
            </div>
        </div>
    )
}

export default Perso