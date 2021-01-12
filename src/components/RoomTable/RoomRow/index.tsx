import React, { useState, useRef } from 'react';
import { Button, Input } from '@material-ui/core';
import StyledLi from '../../StyledComp/StyledLi';

const RoomRow: React.FC<propTypes> = ({ number, id, deleteFn, updateFn }) => {
    const [ isOpen, changeState ] = useState<Boolean>(false);
    const input = useRef<HTMLFormElement>(null);

    const send = (): void => {
        const { value } = input.current!['number'];
        if (value) updateFn(id, parseInt(value));
    }

    return (
        <StyledLi>
            <p>{ number }</p>
            <div>
                <Button onClick={() => { deleteFn(id) }}>Delete</Button>
                <Button onClick={() => { changeState(!isOpen) }}>{ isOpen ? 'Cancel' : 'Update' }</Button>
            </div>

            { isOpen ? 
            <form ref={input}>
                <Input placeholder='New Room Number' name='number'/>
                <Button type='button' onClick={() => { send(); changeState(false) }}>Update</Button>
            </form>
            : null }
        </StyledLi>
    );
}

interface propTypes {
    number: Number,
    id: Number,
    deleteFn: Function,
    updateFn: Function
}

export default RoomRow;