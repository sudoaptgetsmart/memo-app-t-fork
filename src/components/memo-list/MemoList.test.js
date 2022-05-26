import {screen, render} from "@testing-library/react";
import {MemoList} from "./MemoList";

test(
    "should render a Memo comp for each item in the list prop",
    () => {
        const listData = [1, 2, 3, 4, 5, 6]
        const _Memo = () => {
            return <div>MOCK</div>
        }

        render(<MemoList list={listData} _Memo={_Memo}/>)

        const memoComps = screen.getAllByText('MOCK')
        expect(memoComps.length).toBe(listData.length)
    }
)