import styled from 'styled-components'

export default styled.article`
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: top;
    gap: 1.5rem;
    background-color: ${props => props.theme.white};
    border-radius: 8px;
    width: 400px;
`
