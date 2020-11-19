import React from 'react';
import { Link } from 'react-router-dom';
import { Tabs, Tab } from '@material-ui/core';

const NavTab: React.FC<any> = () => {

  return (
    <Tabs>
      <Tab label='Home'  to='/' component={Link} />
      <Tab label='Rooms'  to='/rooms' component={Link} />
      <Tab label='Booking'  to='/booking' component={Link} />
    </Tabs>
  );
}

export default NavTab;