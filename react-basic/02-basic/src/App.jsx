import './App.css'
import Counter from './Components/Counter';
import Hello from './Components/Hello'
import Homie from './Components/Homie';
import Mapp from './Components/Mapp';
import Perso from './Components/Perso';

function App() {
  let rn = Math.floor(Math.random() * 10);
  // let el;
  // // if (rn == 7) {
  // //   el = "lucky number";
  // // }
  // // else {
  // //   el = "try again";
  // // }
  return (
    <>
      <Hello />
      <h1>
        {
          rn == 7 ? "lucky number" : "try again"
        }
        {/* {el} */}
      </h1>
      <Mapp />
      <Perso />
      <Counter />
      <Homie name="ABC" age="18" favColor="RED" />
      <Homie name="DEF" age="20" favColor="BLUE" />
    </>
  )
}

export default App
