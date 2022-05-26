import './App.css';
import {Counter} from "./components/counter/Counter";
import {useState} from "react";
import {Login} from "./components/login/Login";

function App() {

  let [isLoggedIn, setIsLoggedIn] = useState(false)
  let [counter, useCounter] = useState(10)

  function onCounterClick() {
    setCounter(counter + 1)
  }

  function onLogin(creds) {
    if (creds.username == 'admin' && creds.password == 'pass') {
      setIsLoggedIn(true)
    }
  }

  if (!isLoggedIn) {
    return <Login onSubmit={onLogin}/>
  }

  return <>
    <Counter clickCount={counter} onClick={onCounterClick}/>
  </>
}

export default App;
