import styled from 'styled-components';
import { Tabs } from '@material-ui/core';

export const StyledTabs = styled(Tabs)`
    margin: 10px 0;

    & > div > div {
        display: flex;
        justify-content: space-around;
        width: 80vw;
        margin: 0 auto;
    }

    & > div > span {
        background-color: ${props => props.theme.borders};
    }
`;