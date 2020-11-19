import React, { useRef } from 'react';
import { Button, Input } from '@material-ui/core';

const CreateRoomForm: React.FC<propTypes> = ({ create }) => {
    const input = useRef<HTMLFormElement>(null);

    const send = (): void => {
        const { value } = input.current!['number'];
        if (value) create(parseInt(value));
    }

    return (
        <form ref={input}>
            <Input type="text" placeholder='Number' name='number'/>
            <Button type='button' onClick={send}>Create</Button>
        </form>
    );
}

interface propTypes {
    create: Function
}

export default CreateRoomForm;