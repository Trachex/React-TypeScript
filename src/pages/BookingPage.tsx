import React from 'react';
import { ThemeProvider } from 'styled-components';
import { connect } from 'react-redux';

import NavTab from '../components/NavTab';
import BookingTable from '../components/BookingTable';
import ThemeController from '../components/ThemeController';
import StyledDiv from '../components/StyledComp/StyledDiv';
import { ITheme } from '../store/theme/types';

const BookingPage: React.FC<propTypes> = ({ theme }) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledDiv>
        <NavTab />
        <BookingTable />
        <ThemeController />
      </StyledDiv>
    </ThemeProvider>
  );
}

interface propTypes {
  theme: ITheme
}

const mapStateToProps = (state: any) => {
  return {
    theme: state.theme.theme
  }
}

export default connect(mapStateToProps)(BookingPage);