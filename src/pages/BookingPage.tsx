import React from 'react';

import NavTab from '../components/NavTab';
import BookingTable from '../components/BookingTable';

const BookingPage: React.FC<any> = () => {

    return (
      <div>
        <NavTab />
        <BookingTable />
      </div>
    );
}

export default BookingPage;