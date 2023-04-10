import styled from 'styled-components'

const ReplyList = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 2.688rem;

    @media (max-width: 768px) {
        padding-left: 0;
    }
`

const ReplyItem = styled.li`
    margin-top: 0.5rem;
    padding-left: 2.688rem;
    border-left: 2px solid ${props => props.theme.lightGray};

    @media (max-width: 768px) {
        padding-left: 1rem;
    }
`

const CommentItem = styled.li`

`

function CommentList(props) {
    return (
        <>
            <ul>
                <CommentItem>{props.comment}</CommentItem>
            </ul>
            <ReplyList>
                <ReplyItem>{props.reply}</ReplyItem>
                <ReplyItem>{props.reply}</ReplyItem>
            </ReplyList>
        </>
    )
}

export default CommentList