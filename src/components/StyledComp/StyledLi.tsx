import styled from 'styled-components';

const StyledLi = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    border-bottom: 1px solid ${props => props.theme.borders};

    & div, form {
        display: inherit;
        justify-content: space-around;
        margin: 5px 0;
    }
`;

export default StyledLi;