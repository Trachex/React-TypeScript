import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import "react-datepicker/dist/react-datepicker.css";
import { connect } from 'react-redux';
import * as actions from '../../store/table/actions';

const BookingTable: React.FC<any> = ({ from, to, rooms, DateChange, GetAvailable }) => {

const Rooms = rooms.map((e:any) => { return <li key={e.id}>{e.number}</li> });

  return (
    <div>
      <div>
        <DatePicker selected={from} onChange={(date: Date) => { DateChange(date, 'from') }}/>
        <DatePicker selected={to} onChange={(date: Date) => { DateChange(date, 'to') }}/>
        <button type='button' onClick={() => { GetAvailable(moment(from).format("YYYY-MM-DD"), moment(to).format("YYYY-MM-DD")) }}>Search</button> 
      </div>

      <ul>
        { Rooms }
      </ul>

    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
      from: state.table.from,
      to: state.table.to,
      rooms: state.table.rooms
  };
};

export default connect(mapStateToProps, actions)(BookingTable);