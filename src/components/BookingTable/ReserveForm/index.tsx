import React, { useRef, useState } from 'react';
import moment from 'moment';
import "react-datepicker/dist/react-datepicker.css";
import { Input, Select, MenuItem, Button } from '@material-ui/core';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

const ReserveForm: React.FC<propTypes> = ({ Reserve, rooms }) => {
    const input = useRef<HTMLFormElement>(null);
    const [ from, setFrom ] = useState<Date | null>(new Date());
    const [ to, setTo ] = useState<Date | null>(new Date());
    const options = rooms.map(r => <MenuItem key={r.id} value={r.id}>{r.number}</MenuItem>);

    const send = (): void => {
        const owner = input.current!['owner'].value;
        const roomId = input.current!['roomId'].value;
        if (!owner || !roomId || !from || !to) return;
        Reserve(owner, roomId, moment(from).format("YYYY-MM-DD"), moment(to).format("YYYY-MM-DD"));
    }

    return (
        <form ref={input}>
            <Input type="text" placeholder='Owner' name='owner'/>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker value={from} onChange={setFrom} placeholder='From' format="MM/dd/yyyy" variant="inline"/>
                <KeyboardDatePicker value={to} onChange={setTo} placeholder='To' format="MM/dd/yyyy" variant="inline"/>
            </MuiPickersUtilsProvider>
            <Select name='roomId'>
                { options }
            </Select>
            <Button type='button' onClick={send}>Create</Button>
        </form>
    );
}

interface propTypes {
    Reserve: Function,
    rooms: Array<{
        id: number,
        number: Number
    }>
}

export default ReserveForm;