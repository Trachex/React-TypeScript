import React, { useRef } from 'react';

const CreateRoomForm: React.FC<propTypes> = ({ create }) => {
    const input = useRef<HTMLFormElement>(null);

    const send = (): void => {
        const { value } = input.current!['number'];
        if (value) create(parseInt(value));
    }

    return (
        <form ref={input}>
            <input type="text" placeholder='Number' name='number'/>
            <button type='button' onClick={send}>Create</button>
        </form>
    );
}

interface propTypes {
    create: Function
}

export default CreateRoomForm;