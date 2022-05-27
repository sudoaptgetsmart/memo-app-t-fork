import { render, screen } from '@testing-library/react';
import App from './App';

test('should show Login comp when not logged in', () => {
    const _Login = () => <div>MOCK</div>
    render(<App _isLoggedIn={false} _Login={_Login}/>)
    expect(screen.getByText("MOCK")).toBeInTheDocument();
});

test('should show MemoAdd and MemoList comp when logged in', () => {
    const _MemoAdd = () => <div>MEMO ADD</div>
    const _MemoList = () => <div>MEMO LIST</div>
    render(<App _isLoggedIn={true} _MemoAdd={_MemoAdd} _MemoList={_MemoList}/>)

    expect(screen.getByText('MEMO ADD')).toBeInTheDocument()
    expect(screen.getByText('MEMO LIST')).toBeInTheDocument()
})