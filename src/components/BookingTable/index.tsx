import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/booking/actions';

import ReserveForm from './ReserveForm';

const BookingTable: React.FC<any> = ({ rooms, Reserve }) => {
    return (
        <div>
            <ReserveForm rooms={rooms} Reserve={Reserve}/>

        </div>
    );
}

const mapStateToProps = (state: any) => {
    return {
        rooms: state.table.rooms
    };
  };

export default connect(mapStateToProps, actions)(BookingTable);