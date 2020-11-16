import React, { useRef } from 'react';

const CreateRoomForm: React.FC<any> = ({ create }) => {
    const input = useRef<HTMLFormElement>(null);

    return (
        <form ref={input}>
            <input type="text" placeholder='Number' name='number'/>
            <button type='button' onClick={() => { create(input) }}>Create</button>
        </form>
    );
}

export default CreateRoomForm;