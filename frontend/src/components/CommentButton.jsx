import styled from 'styled-components'

export default styled.button`
    cursor: pointer;
    display: flex;
    gap: 0.5rem;
    align-items: center;
    gap: 0.5rem;
    font-family: 'Rubik', sans-serif;
    font-weight: 400;
    font-size: ${props => props.theme.fontSizeParagraph};
    color: ${props => props.red ? props.theme.softRed : props.theme.moderateBlue};
    fill: ${props => props.red ? props.theme.softRed : props.theme.moderateBlue};
    line-height: 24px;

    &:hover {
        color: ${props => props.red ? props.theme.paleRed : props.theme.lightGrayishBlue};
        fill: ${props => props.red ? props.theme.paleRed : props.theme.lightGrayishBlue};
    }
`
