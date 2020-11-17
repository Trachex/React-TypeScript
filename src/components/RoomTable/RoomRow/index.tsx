import React, { useState, useRef } from 'react';

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
            <button onClick={() => { deleteFn(id) }}>Delete</button>
            <button onClick={() => { changeState(!isOpen) }}>{ isOpen ? 'Cancel' : 'Update' }</button>

            { isOpen ? 
            <form ref={input}>
                <input name='number'/>
                <button type='button' onClick={() => { send(); changeState(false) }}>Update</button>
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