import styled from 'styled-components';
import { Input } from '@material-ui/core';

export default styled(Input)`
    && {
        color: ${props => props.theme.textColor};
    }
`;