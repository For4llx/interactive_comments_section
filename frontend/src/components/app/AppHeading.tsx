import styled from 'styled-components'
interface IHeading {
    large?: boolean
}
export default styled.h1<IHeading>`
    font-family: 'Rubik', sans-serif;
    font-weight: 500;
    font-size: ${props => props.large ? "24px" : props.theme.fontSizeParagraph};
    color: ${props => props.theme.darkBlue};
`
