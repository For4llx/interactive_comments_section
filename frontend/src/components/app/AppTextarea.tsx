import styled from 'styled-components'

export default styled.textarea`
    padding: 1rem;
    display: flex;
    align-items: top;
    gap: 1rem;
    max-width: 730px;
    background-color: ${props => props.theme.white};
    border-radius: 8px;
    border: 1px solid ${props => props.theme.lightGray};
    resize: none;
    width: 100%;
    height: 96px;
    line-height: 24px;
    color: ${props => props.theme.darkBlue};

    &:focus {
        border: 1px solid ${props => props.theme.moderateBlue};
    }
`
