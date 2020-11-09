import React from 'react';

import NavTab from '../components/NavTab';
import SearchTable from '../components/SearchTable';

const HomePage: React.FC<any> = () => {

    return (
      <div>
        <NavTab />
        <SearchTable />
      </div>
    );
}

export default HomePage;