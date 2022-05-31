import './App.css';
import {useState} from "react";
import {Login} from "./components/login/Login";
import {MemoAdd} from "./components/memo-add/MemoAdd";
import {MemoList} from "./components/memo-list/MemoList";

function App(props) {
    const {
        _isLoggedIn = false,
        _selectedMemo = null,
        _Login = Login,
        _MemoAdd = MemoAdd,
        _MemoList = MemoList,
        _MemoEdit = MemoEdit,

    } = props;

    const [isLoggedIn, setIsLoggedIn] = useState(_isLoggedIn)
    const [memoList, setMemoList] = useState([])
    const [selectedMemo, setSelectedMemo] = useState(_selectedMemo);

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
        console.log(memo)
    }

    function onEditSelect(memo) {
        setSelectedMemo(memo)
    }

    function onMemoEdit(newMemo) {
        setSelectedMemo(null)
        setMemoList(
            memoList.map((memo) => {
                if (memo.id !== newMemo.id) {
                    return memo
                }
            })
        )

    }

    function onDelete(memo) {
        setMemoList(
            memoList.filter(cMemo => cMemo.id !== memo.id)
        )
    }

    function onEdit(memo) {

    }

    if (!isLoggedIn) {
        return <_Login onSubmit={onLogin}/>
    }

    if (selectedMemo) {
        return <_MemoEdit memo={selectedMemo} onSubmit={onMemoEdit}/>
    }

    return <>
        <_MemoAdd onMemoAdd={onMemoAdd}/>
        <_MemoList list={memoList} onEditSelect={onEditSelect} onDelete={onDelete}/>
    </>
}

export default App;
