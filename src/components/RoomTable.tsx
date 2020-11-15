import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import * as actions from '../store/room/actions';
import RoomRow from './RoomRow';
import CreateRoomForm from './CreateRoomForm';

const RoomTable: React.FC<any> = ({ rooms, GetRooms, CreateRoom }) => {
    useEffect(GetRooms, []);
    const rows = rooms.map((e: any) => <RoomRow key={e.id} number={e.number}/>);

    return (
        <div>
            <CreateRoomForm create={ CreateRoom } />
            <ul>
                { rows }
            </ul>
        </div>
    );
}

const mapStateToProps = (state: any) => {
    return {
        rooms: state.room.rooms
    };
};

export default connect(mapStateToProps, actions)(RoomTable);