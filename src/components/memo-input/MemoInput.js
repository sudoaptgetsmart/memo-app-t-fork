import {useState} from "react";
import {v4 as uuidv4} from 'uuid';
import {Button, Card, Col, Form, FormControl, FormGroup, FormLabel, InputGroup, Row} from "react-bootstrap";

export function MemoInput(props) {

    const newMemo = {
        id: uuidv4(),
        title: '',
        desc: '',
        date: new Date(),
        finished: false
    }

    const {
        onSubmit,
        memo = newMemo
    } = props

    const [formState, setFormState] = useState(memo);

    function onFormSubmit(event) {
        event.preventDefault()
        onSubmit({...formState})
        setFormState(newMemo);
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

    return <Form onSubmit={onFormSubmit}>
        <Form.Group as={Row} className="mb-3 w-50">
            <Form.Label column sm={2}>
                <strong>Title</strong>
            </Form.Label>
            <Col sm={10}>
                <Form.Control onChange={onTitleChange} value={formState.title} type={'text'}/>
            </Col>
        </Form.Group>

        <Form.Group as={Row} className={"mb-3 w-50"}>
            <Form.Label column sm={2}>
                <strong>Description</strong>
            </Form.Label>
            <Col sm={10}>
                <Form.Control as={"textarea"} rows={5} onChange={onDescChange} value={formState.desc}/>
            </Col>
        </Form.Group>
        <Form.Group as={Row} className={"w-25 m-3"}>
            <Form.Control onChange={onDateChange} value={formState.date?.toISOString().substring(0, 10)} type={'date'}
                          placeholder={"Date"}/>
        </Form.Group>
        <FormGroup>
            <FormLabel>
                <strong>Finished:</strong>
                <Form.Check onChange={onFinishedChange} checked={formState.finished} type={'checkbox'}/>
            </FormLabel>
        </FormGroup>

        <Button variant={"primary"} type={"submit"}>Submit</Button>
    </Form>
}