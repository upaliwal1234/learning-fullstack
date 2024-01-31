import React, { Fragment, useState } from 'react'
// import './App.css'
import Frag from './Components/Frag';
import Cars, { BMW, Merc } from './Components/Cars';
import Todo from './Components/Todo';
import Better from './Components/Better';
// named exported functions ko use karne ke liye destructure karke import karna padega and same name use karna padega jo
// but default exported functions ko destructure kare bina use kiya jata hai and unko kisi bhi name se import kar sakte hain


function App() {

  // let [count, setCount] = useState(0);

  // function handleClick() {
  //   setCount(count + 1);
  // }

  // agar mere paas ek component hai and uske ander ek state hai and state change ho rahi hai, agar state ko change kara to component 
  // change ko detect karega and usko rerender karega

  // single parent kyu rakha?
  // taki reconcillation fast ho.
  // by using single parent, reconcillation is much faster and efficient.
  return (
    <Fragment>
      <Frag />
      <Cars />
      <BMW />
      <Merc />
      <Todo />
      <Better />
    </Fragment>
  )
}

export default App
