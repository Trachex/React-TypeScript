import React, { useRef } from 'react';
import { StyledForm } from './styles';
import StyledMButton from '../../StyledComp/MaterialButton';
import StyledMInput from '../../StyledComp/MaterialInput';

const CreateRoomForm: React.FC<propTypes> = ({ create }) => {
    const input = useRef<HTMLFormElement>(null);

    const send = (): void => {
        const { value } = input.current!['number'];
        if (value) create(parseInt(value));
    }

    return (
        <StyledForm ref={input}>
            <StyledMInput type="text" placeholder='Number' name='number'/>
            <StyledMButton type='button' onClick={send}>Create</StyledMButton>
        </StyledForm>
    );
}

interface propTypes {
    create: Function
}

export default CreateRoomForm;