import {screen, render} from "@testing-library/react";
import {MemoAdd} from "./MemoAdd";

test('should show MemoInput comp', () => {
    const _MemoInputData = () => <div>MOCK</div>
    render(<MemoAdd _MemoInput={_MemoInputData}/>)
    expect(screen.getByText('MOCK')).toBeInTheDocument()
})

test('should pass MemoInput the onMemoAdd prop', () => {
    const _onMemoAdd = false;

    let onSubmitProp;
    const _MemoInputData = ({onSubmit}) => {
        onSubmitProp = onSubmit
        return <div>MOCK</div>
    }

    render(<MemoAdd onMemoAdd={_onMemoAdd} _MemoInput={_MemoInputData}/>)

    expect(onSubmitProp).toBe(_onMemoAdd);
})