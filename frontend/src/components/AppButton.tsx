import styled from 'styled-components'

interface Props {
    delete?: boolean
    large?: boolean
    cancel?: boolean
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
    color: ${props => props.theme.white};
    border-radius: 8px;
    background-color: ${props => props.delete ? props.theme.softRed : props.cancel ? props.theme.grayishBlue : props.theme.moderateBlue};

    &:hover {
        background-color: ${props => props.delete ? props.theme.paleRed : props.cancel ? props.theme.lightGrayishBlue : props.theme.lightGrayishBlue};
    }
`
