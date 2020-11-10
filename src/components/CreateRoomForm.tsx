import React, { useRef } from 'react';

const CreateRoomForm: React.FC<any> = () => {
    const input = useRef<HTMLFormElement>(null);

    const create = async () => {
        const name = input.current!['number'].value;
        const res = await (await fetch('/room/create', { method: 'POST', body: JSON.stringify({ name }) })).json();
        console.log(res);
    }

    return (
        <form ref={input}>
            <input type="text" placeholder='Number' name='number'/>
            <button type='button' onClick={create}>Create</button>
        </form>
    );
}

export default CreateRoomForm;