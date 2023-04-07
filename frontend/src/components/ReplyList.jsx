import styled from 'styled-components'

export default styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    padding-left: 2.688rem;
    width: 100%;
    border-left: 2px solid ${props => props.theme.lightGray};

`
