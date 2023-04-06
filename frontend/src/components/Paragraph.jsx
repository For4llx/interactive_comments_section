import styled from 'styled-components'

export default styled.p`
    font-family: 'Rubik', sans-serif;
    font-weight: 400;
    font-size: ${props => props.theme.fontSizeParagraph};
    color: ${props => props.theme.grayishBlue};
    line-height: 24px;
`
