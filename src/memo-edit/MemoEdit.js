import {MemoInput} from "../components/memo-input/MemoInput";

export function MemoEdit({memo, onSubmit, _MemoInput = MemoInput}) {
    return <div>
       <h1>Memo Edit</h1>
        <_MemoInput memo={memo} onSubmit={onSubmit}/>
    </div>

}