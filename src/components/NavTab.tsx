import React from 'react';
import { Link } from 'react-router-dom';

const NavTab: React.FC<any> = (props) => {

    return (
      <nav>
        <Link to={'/'} >Home</Link>
        {/* <Link to={''} >Rooms</Link>
        <Link to={''} >Bookings</Link> */}
      </nav>
    );
}

export default NavTab;