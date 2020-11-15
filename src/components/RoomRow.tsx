import React from 'react';


const RoomRow: React.FC<any> = ({ number }) => {

    return (
        <li>
            { number }
        </li>
    );
}
  
export default RoomRow;