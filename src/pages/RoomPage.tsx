import React from 'react';

import NavTab from '../components/NavTab';
import RoomTable from '../components/RoomTable';

const RoomPage: React.FC<any> = () => {

  return (
    <div>
        <NavTab />
        <RoomTable />
    </div>
  );
}

export default RoomPage;