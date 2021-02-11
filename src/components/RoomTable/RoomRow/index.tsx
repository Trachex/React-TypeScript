import React, { useState, useRef } from 'react';
import StyledMButton from '../../StyledComp/MaterialButton';
import StyledMInput from '../../StyledComp/MaterialInput';
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
                <StyledMButton onClick={() => { deleteFn(id) }}>Delete</StyledMButton>
                <StyledMButton onClick={() => { changeState(!isOpen) }}>{ isOpen ? 'Cancel' : 'Update' }</StyledMButton>
            </div>

            { isOpen ? 
            <form ref={input}>
                <StyledMInput placeholder='New Room Number' name='number'/>
                <StyledMButton type='button' onClick={() => { send(); changeState(false) }}>Update</StyledMButton>
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