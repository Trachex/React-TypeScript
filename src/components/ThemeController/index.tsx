import React from 'react';
import { connect } from 'react-redux';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

import * as actions from '../../store/theme/actions';
import { BaseTheme, DarkTheme } from '../../store/theme/themes';
import { ITheme } from '../../store/theme/types';
import StyledDiv from './styles';

const ThemeController: React.FC<propTypes> = ({ ChangeTheme, theme }) => {
    const handleChange = (): void => {
        if (theme === BaseTheme) ChangeTheme(DarkTheme);
        else ChangeTheme(BaseTheme);
    }

    return (
        <StyledDiv>
            <FormGroup row>
                <FormControlLabel control={
                    <Switch 
                        checked={theme !== BaseTheme}
                        onChange={handleChange}
                    />
                } label='Theme'/>
            </FormGroup>
        </StyledDiv>
    );
}

interface propTypes {
    ChangeTheme: Function,
    theme: ITheme
}

const mapStateToProps = (state: any) => {
    return {
        theme: state.theme.theme
    };
};

export default connect(mapStateToProps, actions)(ThemeController);