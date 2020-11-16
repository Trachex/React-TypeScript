import React, { useState } from 'react';

const RoomRow: React.FC<any> = ({ number, deleteFn }) => {
    // const [ isOpen, changeState ] = useState<Boolean>(false);

    return (
        <li>
            <p>{ number }</p>
            <button onClick={deleteFn}>Delete</button>
        </li>
    );
}
  
export default RoomRow;