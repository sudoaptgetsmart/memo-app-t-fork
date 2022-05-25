import {screen, render} from "@testing-library/react";
import {Counter} from "./Counter";

test('should show a button with the text "Click Me!"', () => {
    // arrange

    // act
    render(<Counter/>)

    // assert
    expect(screen.getByText('Click Me!').tagName)
        .toBe("BUTTON");
})