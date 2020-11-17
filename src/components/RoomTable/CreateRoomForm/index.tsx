import React, { useRef } from 'react';

const CreateRoomForm: React.FC<any> = ({ create }) => {
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

export default CreateRoomForm;