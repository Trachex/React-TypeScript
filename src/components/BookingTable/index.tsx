import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/booking/actions';
import StyledUl from '../StyledComp/StyledUl';
import ReserveForm from './ReserveForm';
import BookingRow from './BookingRow';

const BookingTable: React.FC<propTypes> = ({ bookings, rooms, Reserve, DeleteBooking, UpdateBooking, GetBookings, GetRooms }) => {
    useEffect(() => { GetRooms().then(GetBookings()); }, [GetBookings, GetRooms]);
    const rows = bookings.map((b => {
        return <BookingRow key={b.id} data={b} rooms={rooms} deleteFn={DeleteBooking} updateFn={UpdateBooking}/>
    }));

    return (
        <div>
            <ReserveForm rooms={rooms} Reserve={Reserve}/>
            <StyledUl>
                { rows }
            </StyledUl>
        </div>
    );
}

interface propTypes {
    rooms: Array<any>,
    bookings: Array<any>,
    Reserve: Function,
    DeleteBooking: Function,
    UpdateBooking: Function,
    GetBookings: Function,
    GetRooms: Function
}

const mapStateToProps = (state: any) => {
    return {
        rooms: state.booking.rooms,
        bookings: state.booking.bookings
    };
  };

export default connect(mapStateToProps, actions)(BookingTable);