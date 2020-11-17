import React, { useState, useRef } from 'react';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const BookingRow: React.FC<propTypes> = ({ data, rooms, deleteFn, updateFn }) => {
    const [ isOpen, changeState ] = useState<Boolean>(false);
    const [ fromInput, setFrom ] = useState<any>();
    const [ toInput, setTo ] = useState<any>();
    const input = useRef<HTMLFormElement>(null);

    const { owner, id, from, to, room } = data;
    const options = rooms.map((r: any) => <option value={r.id}>{r.number}</option>);

    const send = (): void => {
        const owner = input.current!['owner'].value;
        const roomId = input.current!['roomId'].value;
        if (!owner && !roomId && !fromInput && !toInput) return;

        updateFn(owner,
            roomId,
            fromInput ? moment(fromInput).format("YYYY-MM-DD") : undefined,
            toInput ? moment(toInput).format("YYYY-MM-DD") : undefined
        );
    }

    return (
        <li>
            <p>{ owner }</p>
            <p>{ room.number }</p>
            <p>{ from }</p>
            <p>{ to }</p>
            <button onClick={() => { deleteFn(id) }}>Delete</button>
            <button onClick={() => { changeState(!isOpen) }}>{ isOpen ? 'Cancel' : 'Update' }</button>

            { isOpen ? 
            <form ref={input}>
                <input type='text' name='owner' placeholder='New owner'/>
                <DatePicker placeholderText='From' onChange={setFrom}/>
                <DatePicker placeholderText='To' onChange={setTo}/>
                <select name="roomId">
                    { options }
                </select>
                <button type='button' onClick={() => { send(); changeState(false) }}>Update</button>
            </form>
            : null }
        </li>
    );
}

interface propTypes {
    data: {
        owner: String,
        id: Number,
        from: String,
        to: String,
        room: { number: Number }
    },
    rooms: Array<{}>,
    deleteFn: Function,
    updateFn: Function
}

export default BookingRow;