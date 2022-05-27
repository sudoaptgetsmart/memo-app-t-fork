import {Memo} from "../memo/Memo";


// list.map((memoData) => {
//     return <Memo memo={memoData}/>
// })

export function MemoList({list, _Memo = Memo}) {

    function sortMemoList(a, b) {
        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;
        return 0;
    }

    return <>
        { list.filter(m => !m.finished).sort(sortMemoList).map((memoData, idx) => <_Memo key={idx} memo={memoData}/>) }
    </>
}