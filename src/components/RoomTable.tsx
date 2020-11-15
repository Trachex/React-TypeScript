import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import * as actions from '../store/room/actions';
import RoomRow from './RoomRow';

const RoomTable: React.FC<any> = ({ rooms, GetRooms }) => {
    useEffect(GetRooms, []);
    const rows = rooms.map((e: any) => <RoomRow key={e.id} number={e.number}/>);

    return (
        <div>
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