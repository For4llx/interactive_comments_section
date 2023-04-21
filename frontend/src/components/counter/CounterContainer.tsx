import styled from 'styled-components'

export default styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${props => props.theme.colors.veryLightGray};
    width: fit-content;
    height: fit-content;
    border-radius: 10px;

    @media (max-width: 768px) {
        display: none;
    }
`