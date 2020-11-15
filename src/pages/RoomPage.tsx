import React from 'react';

import NavTab from '../components/NavTab';
import CreateRoomForm from '../components/CreateRoomForm';
import RoomTable from '../components/RoomTable';

const RoomPage: React.FC<any> = () => {

  return (
    <div>
        <NavTab />
        <CreateRoomForm />
        <RoomTable />
    </div>
  );
}

export default RoomPage;