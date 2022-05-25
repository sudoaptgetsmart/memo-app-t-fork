import {useState} from "react";

export function Counter() {
    let [counter, setCounter] = useState(0)

    function onClick() {
        setCounter(counter + 1)
    }

    return <div style={{"border": '1px solid black'}}>
        counter: {counter}
        <br/>
        <button onClick={onClick}>Click Me!</button>
    </div>
}