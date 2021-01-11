import React from 'react';
import { Link } from 'react-router-dom';
import { Tabs, Tab } from '@material-ui/core';


const NavTab: React.FC<any> = () => {

  return (
    <Tabs value={window.location.pathname}>
      <Tab value={'/'} label='Home' to='/' component={Link} />
      <Tab value={'/rooms'} label='Rooms' to='/rooms' component={Link} />
      <Tab value={'/booking'} label='Booking' to='/booking' component={Link} />
    </Tabs>
  );
}

export default NavTab;