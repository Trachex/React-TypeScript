import styled from 'styled-components';
import { Button } from '@material-ui/core';

export default styled(Button)`
    && {
        color: ${props => props.theme.textColor};
    }
`;