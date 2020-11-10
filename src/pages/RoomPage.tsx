import React from 'react';

import NavTab from '../components/NavTab';
import CreateRoomForm from '../components/CreateRoomForm';

const RoomPage: React.FC<any> = () => {

  return (
    <div>
        <NavTab />
        <CreateRoomForm />
    </div>
  );
}

export default RoomPage;