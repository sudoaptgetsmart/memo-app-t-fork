import {Memo} from "../memo/Memo";


// list.map((memoData) => {
//     return <Memo memo={memoData}/>
// })

export function MemoList({list, _Memo = Memo}) {
    return <>
        { list.map(memoData => <_Memo memo={memoData}/>) }
    </>
}