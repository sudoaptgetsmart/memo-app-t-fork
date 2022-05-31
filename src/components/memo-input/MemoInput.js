import {useState} from "react";
import {v4 as uuidv4} from 'uuid';

export function MemoInput(props) {

    const emptyForm = {
        id: uuidv4(),
        title: '',
        desc: '',
        date: new Date(),
        finished: false
    }
    const {
        onSubmit,
        memo = emptyForm
    } = props

    const [formState, setFormState] = useState(memo);

    function onFormSubmit(event) {
        event.preventDefault()
        onSubmit({...formState})
        setFormState(emptyForm)
    }

    function onTitleChange(event) {
        setFormState({
            ...formState,
            title: event.target.value
        })
    }

    function onDescChange(event) {
        setFormState({
            ...formState,
            desc: event.target.value
        })
    }

    function onDateChange(event) {
        setFormState({
            ...formState,
            date: new Date(event.target.value)
        })
    }

    function onFinishedChange(event) {
        setFormState({
            ...formState,
            finished: event.target.checked
        })
    }

    return <form onSubmit={onFormSubmit}>
        <input onChange={onTitleChange} value={formState.title} type={'text'} placeholder={"Title"}/>
        <input onChange={onDescChange} value={formState.desc} type={'text'} placeholder={"Description"}/>
        <input onChange={onDateChange} value={formState.date.toISOString().substring(0,10)} type={'date'} placeholder={"Date"}/>
        <label>
            Finished:
            <input onChange={onFinishedChange} value={formState.finished} type={'checkbox'}/>
        </label>

        <button>Submit</button>
    </form>
}