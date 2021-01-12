import React from 'react';
import { Link } from 'react-router-dom';
import { Tab } from '@material-ui/core';
import { StyledTabs } from './styles';

const NavTab: React.FC<any> = () => {

  return (
    <StyledTabs value={window.location.pathname}>
      <Tab value={'/'} label='Home' to='/' component={Link} />
      <Tab value={'/rooms'} label='Rooms' to='/rooms' component={Link} />
      <Tab value={'/booking'} label='Booking' to='/booking' component={Link} />
    </StyledTabs>
  );
}

export default NavTab;