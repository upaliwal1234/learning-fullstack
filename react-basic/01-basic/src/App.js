import Animal from "./Components/Animal";

function App() {
  let a = 10;
  let b = false;
  let c = null;
  let d = undefined;
  return (
    <div>
      <div>
        Hello
      </div>
      <div>{a}</div>
      <div>{JSON.stringify(b)}</div>
      <div>{JSON.stringify(c)}</div>
      <div>{JSON.stringify(d)}</div>
      <Animal />
    </div>
  )
}

export default App;