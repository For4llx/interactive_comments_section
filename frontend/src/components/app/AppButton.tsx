import styled from 'styled-components'

interface Props {
    id?: any
    delete?: boolean
    large?: boolean
    cancel?: boolean
    onClick?: any
}

export default styled.button<Props>`
    cursor: pointer;
    width: fit-content;
    height: fit-content;
    text-transform: uppercase;
    font-weight: bold;
    font-size: ${props => props.theme.fontSizeParagraph};
    min-width: ${props => props.large ? "161px" : "104px"};
    min-height: 48px;
    color: ${props => props.theme.colors.white};
    border-radius: 8px;
    background-color: ${props => props.delete ? props.theme.colors.softRed : props.cancel ? props.theme.colors.grayishBlue : props.theme.colors.moderateBlue};

    &:hover {
        background-color: ${props => props.delete ? props.theme.colors.paleRed : props.cancel ? props.theme.colors.lightGrayishBlue : props.theme.colors.lightGrayishBlue};
    }
`
