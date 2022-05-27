import {MemoInput} from "../memo-input/MemoInput";

export function MemoAdd({onMemoAdd, _MemoInput = MemoInput}) {
    return <_MemoInput onSubmit={onMemoAdd}/>
}