import React from 'react';
import { Link } from 'react-router-dom';

const NavTab: React.FC<any> = () => {

  return (
    <nav>
      <Link to={'/'} >Home</Link>
      <Link to={'/rooms'} >Rooms</Link>
      <Link to={'/booking'} >Bookings</Link>
    </nav>
  );
}

export default NavTab;