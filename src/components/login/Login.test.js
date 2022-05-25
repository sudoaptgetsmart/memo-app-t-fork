import {render, screen} from "@testing-library/react";
import {Login} from "./Login";
import userEvent from "@testing-library/user-event";


test('should show a input with type text and placeholder "username" ', () => {
    render(<Login/>);
    const input = screen.getByPlaceholderText('username');
    expect(input.tagName).toBe('INPUT');
    expect(input).toHaveAttribute('type', 'text');
})

test('should show a input with type password and placeholder "password" ', () => {
    render(<Login/>);
    const input = screen.getByPlaceholderText('password');
    expect(input.tagName).toBe('INPUT');
    expect(input).toHaveAttribute('type', 'password');
})

test('should show a button that has the text "Login"', () => {
    render(<Login/>)
    const button = screen.getByText('Login');
    expect(button.tagName).toBe('BUTTON');
})

test('should run onSubmit prop with the user input when "Login" button is clicked', () => {
    // arrange
    const _onSubmit = jest.fn();

    // act
    render(<Login onSubmit={_onSubmit}/>)

    // assert
    const username = screen.getByPlaceholderText('username');
    const password = screen.getByPlaceholderText('password');
    const button = screen.getByText('Login');

    userEvent.type(username, 'user')
    userEvent.type(password, 'pass')
    userEvent.click(button);

    expect(_onSubmit).toHaveBeenCalledWith(
        {username: 'user', password: 'pass'}
    )
})


