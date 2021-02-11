import styled from 'styled-components';

const StyledDiv = styled.div`
    background-color: ${props => props.theme.bgColor};
    color: ${props => props.theme.textColor};
    min-height: 100vh;
`;

export default StyledDiv;