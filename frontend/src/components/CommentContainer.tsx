import styled from 'styled-components'

export default styled.article`
    padding: 1.5rem;
    display: flex;
    align-items: top;
    gap: 1.5rem;
    background-color: ${props => props.theme.white};
    border-radius: 8px;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`
