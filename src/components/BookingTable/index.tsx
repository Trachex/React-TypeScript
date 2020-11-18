import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/booking/actions';

import ReserveForm from './ReserveForm';
import BookingRow from './BookingRow';

const BookingTable: React.FC<propTypes> = ({ bookings, rooms, Reserve, DeleteBooking, UpdateBooking, GetBookings }) => {
    useEffect(() => { GetBookings() }, [GetBookings]);
    const rows = bookings.map(((b: any) => {
        return <BookingRow key={b.id} data={b} rooms={rooms} deleteFn={DeleteBooking} updateFn={UpdateBooking}/>
    }));

    return (
        <div>
            <ReserveForm rooms={rooms} Reserve={Reserve}/>
            <ul>
                { rows }
            </ul>
        </div>
    );
}

interface propTypes {
    rooms: Array<any>,
    bookings: Array<any>,
    Reserve: Function,
    DeleteBooking: Function,
    UpdateBooking: Function,
    GetBookings: Function
}

const mapStateToProps = (state: any) => {
    return {
        rooms: state.room.rooms,
        bookings: state.booking.bookings
    };
  };

export default connect(mapStateToProps, actions)(BookingTable);