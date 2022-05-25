import './App.css';
import {Counter} from "./components/counter/Counter";
import {useState} from "react";

function App() {

  let [counter, setCounter] = useState(10)
  function onCounterClick() {
    setCounter(counter + 1)
  }

  return <>
    <Counter clickCount={counter} onClick={onCounterClick}/>
  </>
}

export default App;
