import styled from 'styled-components'

export default styled.article`
    padding: 1.5rem;
    display: flex;
    align-items: top;
    gap: 1.5rem;
    background-color: ${props => props.theme.colors.white};
    border-radius: 8px;
    width: 100%;
`