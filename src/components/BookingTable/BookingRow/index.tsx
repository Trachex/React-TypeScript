import React, { useState, useRef } from 'react';
import moment from 'moment';
import "react-datepicker/dist/react-datepicker.css";
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import StyledLi from '../../StyledComp/StyledLi';
import { StyledMSelect, StyledMMenuItem } from '../../StyledComp/MaterialSelect';
import StyledMButton from '../../StyledComp/MaterialButton';
import StyledMInput from '../../StyledComp/MaterialInput';

const BookingRow: React.FC<propTypes> = ({ data, rooms, deleteFn, updateFn }) => {
    const [ isOpen, changeState ] = useState<Boolean>(false);
    const [ fromInput, setFrom ] = useState<any>();
    const [ toInput, setTo ] = useState<any>();
    const input = useRef<HTMLFormElement>(null);

    const { owner, id, from, to, roomId } = data;
    const room = rooms.find(e => e.id === roomId);
    const options = rooms.map((r: any) => <StyledMMenuItem key={r.id} value={r.id}>{r.number}</StyledMMenuItem>);

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
        <StyledLi>
            <p>{ owner }</p>
            <p>{ room.number }</p>
            <p>{ from }</p>
            <p>{ to }</p>
            <div>
                <StyledMButton onClick={() => { deleteFn(id) }}>Delete</StyledMButton>
                <StyledMButton onClick={() => { changeState(!isOpen) }}>{ isOpen ? 'Cancel' : 'Update' }</StyledMButton>
            </div>

            { isOpen ? 
            <form ref={input}>
                <StyledMInput type='text' name='owner' placeholder='New owner'/>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker value={from} onChange={setFrom} placeholder='From' format="MM/dd/yyyy" variant="inline"/>
                    <KeyboardDatePicker value={to} onChange={setTo} placeholder='To' format="MM/dd/yyyy" variant="inline"/>
                </MuiPickersUtilsProvider>
                <StyledMSelect name="newRoomId">
                    { options }
                </StyledMSelect>
                <StyledMButton type='button' onClick={() => { send(); changeState(false) }}>Update</StyledMButton>
            </form>
            : null }
        </StyledLi>
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