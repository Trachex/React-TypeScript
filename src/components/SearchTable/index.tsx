import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import "react-datepicker/dist/react-datepicker.css";
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import * as actions from '../../store/table/actions';

const SearchTable: React.FC<propTypes> = ({ from, to, rooms, DateChange, GetAvailable }) => {

const Rooms = rooms.map(e => { return <li key={e.id}>{e.number}</li> });

  return (
    <div>
      <div>
        <DatePicker placeholderText='From' selected={from} onChange={(date: Date) => { DateChange(date, 'from') }}/>
        <DatePicker placeholderText='To' selected={to} onChange={(date: Date) => { DateChange(date, 'to') }}/>
        <Button type='button' onClick={() => { GetAvailable(moment(from).format("YYYY-MM-DD"), moment(to).format("YYYY-MM-DD")) }}>Search</Button> 
      </div>

      <ul>
        { Rooms }
      </ul>

    </div>
  );
}

interface propTypes {
  from: Date,
  to: Date,
  rooms: Array<{
    id: number,
    number: Number
  }>,
  DateChange: Function,
  GetAvailable: Function
}

const mapStateToProps = (state: any) => {
  return {
      from: state.table.from,
      to: state.table.to,
      rooms: state.table.rooms
  };
};

export default connect(mapStateToProps, actions)(SearchTable);