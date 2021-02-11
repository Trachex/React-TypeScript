import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import StyledMButton from '../StyledComp/MaterialButton';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { StyledOpt } from './styles';
import StyledUl from '../StyledComp/StyledUl';
import * as actions from '../../store/table/actions';


const SearchTable: React.FC<propTypes> = ({ from, to, rooms = [], DateChange, GetAvailable }) => {

const Rooms = rooms.map(e => { return <li key={e.id}>{e.number}</li> });

  return (
    <div>
      <StyledOpt>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker value={new Date()} onChange={(date: any) => { DateChange(date, 'from') }} placeholder='From' format="MM/dd/yyyy" variant="inline"/>
          <KeyboardDatePicker value={new Date()} onChange={(date: any) => { DateChange(date, 'to') }} placeholder='To' format="MM/dd/yyyy" variant="inline"/>
        </MuiPickersUtilsProvider>
        <StyledMButton type='button' onClick={() => { GetAvailable(moment(from).format("YYYY-MM-DD"), moment(to).format("YYYY-MM-DD")) }}>Search</StyledMButton> 
      </StyledOpt>

      <StyledUl>
        { Rooms }
      </StyledUl>

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