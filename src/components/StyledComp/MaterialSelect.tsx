import styled from 'styled-components';
import { Select, MenuItem } from '@material-ui/core';

export const StyledMSelect = styled(Select)`
    && {
        color: ${props => props.theme.textColor};
    }
`;

export const StyledMMenuItem = styled(MenuItem)`
    && {
        color: ${props => props.theme.textColor};
        background-color: ${props => props.theme.bgColor};
    }
`;