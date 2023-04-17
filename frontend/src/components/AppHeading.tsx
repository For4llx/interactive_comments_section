import styled from 'styled-components'

interface Props {
    large?: boolean
}

export default styled.h1<Props>`
    font-family: 'Rubik', sans-serif;
    font-weight: 500;
    font-size: ${props => props.large ? "24px" : props.theme.fontSizeParagraph};
    color: ${props => props.theme.darkBlue};
`
