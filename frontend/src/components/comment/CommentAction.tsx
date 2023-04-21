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
    font-size: ${props => props.theme.typography.fontSizeParagraph};
    color: ${props => props.delete ? props.theme.colors.softRed : props.theme.colors.moderateBlue};
    fill: ${props => props.delete ? props.theme.colors.softRed : props.theme.colors.moderateBlue};
    line-height: 24px;
    &:hover {
        color: ${props => props.delete ? props.theme.colors.paleRed : props.theme.colors.lightGrayishBlue};
        fill: ${props => props.delete ? props.theme.colors.paleRed : props.theme.colors.lightGrayishBlue};
    }
`