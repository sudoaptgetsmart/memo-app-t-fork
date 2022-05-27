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

test('should pass correct Memo prop and onEditMemo prop to each memo comp', () => {
    const _list = [1]
    const _onEditSelect = true;

    let memoProp;
    let onEditSelectProp;
    const _Memo = ({memo, onEditSelect}) => {
        memoProp = memo;
        onEditSelectProp = onEditSelect;
        return <div>MOCK</div>
    }

    render(<MemoList list={_list} onEditSelect={_onEditSelect} _Memo={_Memo}/>)
    expect(memoProp).toBe(_list[0])
    expect(onEditSelectProp).toBe(_onEditSelect)
})