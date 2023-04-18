import styled from 'styled-components'

interface Props {
    onSubmit?: any
}

export default styled.form<Props>`
    display: flex;
    gap: 1.5rem;
    width: 100%;
`