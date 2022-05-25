import {useState} from "react";

export function Counter({clickCount, onClick}) {
    return <div style={{"border": '1px solid black'}}>
        counter: {clickCount}
        <br/>
        <button onClick={onClick}>Click Me!</button>
    </div>
}