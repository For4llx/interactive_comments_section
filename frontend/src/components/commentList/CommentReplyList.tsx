import styled from 'styled-components'

export default styled.ul`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    margin-left: 2.68rem;
    padding-left: 2.68rem;
    border-left: 2px solid ${props => props.theme.colors.lightGray};
`