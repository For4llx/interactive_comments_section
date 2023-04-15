import styled from 'styled-components'

interface Props {
    delete?: boolean
}

export default styled.button<Props>`
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-family: 'Rubik', sans-serif;
    font-weight: 400;
    font-size: ${props => props.theme.fontSizeParagraph};
    color: ${props => props.delete ? props.theme.softRed : props.theme.moderateBlue};
    fill: ${props => props.delete ? props.theme.softRed : props.theme.moderateBlue};
    line-height: 24px;
    &:hover {
        color: ${props => props.delete ? props.theme.paleRed : props.theme.lightGrayishBlue};
        fill: ${props => props.delete ? props.theme.paleRed : props.theme.lightGrayishBlue};
    }
`