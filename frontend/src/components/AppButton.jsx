import styled from 'styled-components'

export default styled.button`
    cursor: pointer;
    width: fit-content;
    height: fit-content;
    text-transform: uppercase;
    font-weight: bold;
    min-width: ${props => props.large ? "161px" : "104px"};
    min-height: 48px;
    color: ${props => props.theme.white};
    border-radius: 8px;
    background-color: ${props => props.delete ? props.theme.softRed : props.cancel ? props.theme.grayishBlue : props.theme.moderateBlue};
    &:hover {
        background-color: ${props => props.delete ? props.theme.paleRed : props.cancel ? props.theme.lightGrayishBlue : props.theme.lightGrayishBlue};
    }
`