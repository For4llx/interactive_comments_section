import styled from 'styled-components'

export default styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${props => props.theme.veryLightGray};
    width: fit-content;
    height: fit-content;
    border-radius: 10px;
`
