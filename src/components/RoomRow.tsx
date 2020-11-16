import React, { useState, useRef } from 'react';

const RoomRow: React.FC<any> = ({ number, id, deleteFn, updateFn }) => {
    const [ isOpen, changeState ] = useState<Boolean>(false);
    const input = useRef<HTMLFormElement>(null);

    return (
        <li>
            <p>{ number }</p>
            <button onClick={() => { deleteFn(id) }}>Delete</button>
            <button onClick={() => { changeState(!isOpen) }}>{ isOpen ? 'Cancel' : 'Update' }</button>

            { isOpen ? 
            <form ref={input}>
                <input name='number'/>
                <button type='button' onClick={() => { updateFn(id, input); changeState(false) }}>Update</button>
            </form>
            : null }
        </li>
    );
}

export default RoomRow;