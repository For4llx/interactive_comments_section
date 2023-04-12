import styled from 'styled-components'

const CommentAddWrapper = styled.article`
    padding: 1.5rem;
    display: flex;
    align-items: top;
    gap: 1.5rem;
    background-color: ${props => props.theme.white};
    border-radius: 8px;
    width: 100%;
`

const CommentAddImage = styled.img`
    width: 40px;
    height: 40px;
`

const CommentAddTextarea = styled.textarea`
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

const Item = styled.li`
    width: 100%;
    padding-top: 0.5rem;
`

function CommentAdd(props) {
    return (
        <CommentAddItem>
            <CommentAddWrapper>
                <CommentAddImage src={props.picture} alt={props.username} />
                <CommentAddTextarea></CommentAddTextarea>
                {props.button}
            </CommentAddWrapper>
        </CommentAddItem>
    )
}

export default CommentAdd
