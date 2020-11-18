import React, { useRef, useState } from 'react';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const ReserveForm: React.FC<propTypes> = ({ Reserve, rooms }) => {
    const input = useRef<HTMLFormElement>(null);
    const [ from, setFrom ] = useState<any>();
    const [ to, setTo ] = useState<any>();
    const options = rooms.map((r: any) => <option key={r.id} value={r.id}>{r.number}</option>);

    const send = (): void => {
        const owner = input.current!['owner'].value;
        const roomId = input.current!['roomId'].value;
        if (!owner || !roomId || !from || !to) return;
        Reserve(owner, roomId, moment(from).format("YYYY-MM-DD"), moment(to).format("YYYY-MM-DD"));
    }

    return (
        <form ref={input}>
            <input type="text" placeholder='Owner' name='owner'/>
            <DatePicker placeholderText='From' onChange={setFrom}/>
            <DatePicker placeholderText='To' onChange={setTo}/>
            <select name='roomId'>
                { options }
            </select>
            <button type='button' onClick={send}>Create</button>
        </form>
    );
}

interface propTypes {
    Reserve: Function,
    rooms: Array<{}>
}

export default ReserveForm;