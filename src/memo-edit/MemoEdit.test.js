import {screen, render} from "@testing-library/react";
import {MemoEdit} from "./MemoEdit";

test(
    "should show MemoInput comp,"
    () => {
    const _MemoInput = () => <div>MOCK</div>
    render(<MemoEdit _MemoInput={_MemoInput}/>)
    expect(screen)
    }
)