import styled from 'styled-components'

export default styled.p`
    font-family: 'Rubik', sans-serif;
    font-weight: 400;
    font-size: ${props => props.theme.typography.fontSizeParagraph};
    color: ${props => props.theme.colors.grayishBlue};
    line-height: 24px;
`