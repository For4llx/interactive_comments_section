import styled from 'styled-components'

export default styled.button`
    cursor: pointer;
    width: fit-content;
    height: fit-content;
    min-width: 104px;
    min-height: 48px;
    color: ${props => props.theme.white};
    border-radius: 8px;
    background-color: ${props => props.theme.moderateBlue};

    &:hover {
        background-color: ${props => props.theme.lightGrayishBlue};
    }
`
