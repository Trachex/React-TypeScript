import React, { useState, useRef } from 'react';
import { Button, Input } from '@material-ui/core';

const RoomRow: React.FC<propTypes> = ({ number, id, deleteFn, updateFn }) => {
    const [ isOpen, changeState ] = useState<Boolean>(false);
    const input = useRef<HTMLFormElement>(null);

    const send = (): void => {
        const { value } = input.current!['number'];
        if (value) updateFn(id, parseInt(value));
    }

    return (
        <li>
            <p>{ number }</p>
            <Button onClick={() => { deleteFn(id) }}>Delete</Button>
            <Button onClick={() => { changeState(!isOpen) }}>{ isOpen ? 'Cancel' : 'Update' }</Button>

            { isOpen ? 
            <form ref={input}>
                <Input placeholder='New Room Number' name='number'/>
                <Button type='button' onClick={() => { send(); changeState(false) }}>Update</Button>
            </form>
            : null }
        </li>
    );
}

interface propTypes {
    number: Number,
    id: Number,
    deleteFn: Function,
    updateFn: Function
}

export default RoomRow;