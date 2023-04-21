import styled from 'styled-components'

interface IProps {
    id?: number
}

export default styled.button<IProps>`
    cursor: pointer;
    display: flex;
    align-items: center;
    fill: ${props => props.theme.colors.lightGrayishBlue};
    padding: 1rem;

    &:hover {
        fill: ${props => props.theme.colors.moderateBlue};
    }
`
