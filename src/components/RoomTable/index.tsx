import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/booking/actions';
import RoomRow from './RoomRow';
import CreateRoomForm from './CreateRoomForm';
import StyledUl from '../StyledComp/StyledUl';

const RoomTable: React.FC<propTypes> = ({ rooms = [], GetRooms, CreateRoom, DeleteRoom, UpdateRoom }) => {
    useEffect(() => { GetRooms() }, [GetRooms]);
    const rows = rooms.map((e: any) => <RoomRow key={e.id} id={e.id} number={e.number} deleteFn={DeleteRoom} updateFn={UpdateRoom}/>);

    return (
        <div>
            <CreateRoomForm create={ CreateRoom } />
            <StyledUl>
                { rows }
            </StyledUl>
        </div>
    );
}

interface propTypes {
    rooms: Array<{}>,
    GetRooms: Function,
    CreateRoom: Function,
    DeleteRoom: Function,
    UpdateRoom: Function
}

const mapStateToProps = (state: any) => {
    return {
        rooms: state.booking.rooms
    };
};

export default connect(mapStateToProps, actions)(RoomTable);