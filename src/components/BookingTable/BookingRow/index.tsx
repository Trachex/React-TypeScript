import React, { useState, useRef } from 'react';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Button, Input, Select, MenuItem } from '@material-ui/core';

const BookingRow: React.FC<propTypes> = ({ data, rooms, deleteFn, updateFn }) => {
    const [ isOpen, changeState ] = useState<Boolean>(false);
    const [ fromInput, setFrom ] = useState<any>();
    const [ toInput, setTo ] = useState<any>();
    const input = useRef<HTMLFormElement>(null);

    const { owner, id, from, to, roomId } = data;
    const room = rooms.find(e => e.id === roomId);
    const options = rooms.map((r: any) => <MenuItem key={r.id} value={r.id}>{r.number}</MenuItem>);

    const send = (): void => {
        const owner = input.current!['owner'].value;
        const newRoomId = input.current!['newRoomId'].value;

        if (!owner && !newRoomId && !fromInput && !toInput) return;

        updateFn(id,
            owner,
            newRoomId,
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
            <Button onClick={() => { deleteFn(id) }}>Delete</Button>
            <Button onClick={() => { changeState(!isOpen) }}>{ isOpen ? 'Cancel' : 'Update' }</Button>

            { isOpen ? 
            <form ref={input}>
                <Input type='text' name='owner' placeholder='New owner'/>
                <DatePicker placeholderText='From' onChange={setFrom}/>
                <DatePicker placeholderText='To' onChange={setTo}/>
                <Select name="newRoomId">
                    { options }
                </Select>
                <Button type='button' onClick={() => { send(); changeState(false) }}>Update</Button>
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
        roomId: Number
    },
    rooms: Array<any>,
    deleteFn: Function,
    updateFn: Function
}

export default BookingRow;