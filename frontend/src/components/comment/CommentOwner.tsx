import styled from 'styled-components'

export default styled.div`
    padding: 1px 6px 1px 6px;
    font-family: 'Rubik', sans-serif;
    font-weight: 500;
    font-size: 13px;
    color: ${props => props.theme.white};
    background-color: ${props => props.theme.moderateBlue};
    border-radius: 2px;
`
