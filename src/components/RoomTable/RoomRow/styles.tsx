import styled from 'styled-components';

export const StyledLi = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    & div, form {
        display: inherit;
        justify-content: space-around;
        margin: 5px 0;
    }
`;