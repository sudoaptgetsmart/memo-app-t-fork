import './App.css';
import {useState} from "react";
import {Login} from "./components/login/Login";
import {MemoAdd} from "./components/memo-add/MemoAdd";
import {MemoList} from "./components/memo-list/MemoList";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const [memoList, setMemoList] = useState([])
  console.log(memoList)

  function onLogin(creds) {
    if (creds.username === 'admin' && creds.password === 'pass') {
      setIsLoggedIn(true)
    }
  }

  function onMemoAdd(memo) {
    setMemoList([
        ...memoList,
        memo
    ])
  }

  if (!isLoggedIn) {
    return <Login onSubmit={onLogin}/>
  }

  return <>
    <MemoAdd onMemoAdd={onMemoAdd}/>
    <MemoList list={memoList}/>
  </>
}

export default App;
