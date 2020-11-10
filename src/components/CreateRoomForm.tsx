import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { CreateRoom } from '../store/room/actions';

const CreateRoomForm: React.FC<any> = ({ create }) => {
    const input = useRef<HTMLFormElement>(null);

    return (
        <form ref={input}>
            <input type="text" placeholder='Number' name='number'/>
            <button type='button' onClick={() => { create(input) }}>Create</button>
        </form>
    );
}

const mapStateToProps = () => {
    return {};
};

export default connect(mapStateToProps, { create: CreateRoom })(CreateRoomForm);