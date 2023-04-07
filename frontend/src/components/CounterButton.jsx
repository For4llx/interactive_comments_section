import styled from 'styled-components'

export default styled.button`
    cursor: pointer;
    fill: ${props => props.theme.lightGrayishBlue};
    padding: 1rem;

    &:hover {
        fill: ${props => props.theme.moderateBlue};
    }
`
