function Mapp() {
    let arr = ["😀", "🏀", "📷", "🚀", "💎"];
    let arr2 = [10, 20, 30, 40, 50];
    let rn = Math.floor(Math.random() * 5);
    return (
        <div>
            <h1>{arr[rn]}</h1>

            {arr2.map((item, index) => {
                return <h3 key={index}>{item}</h3>;
            })}
        </div>
    )
}

export default Mapp