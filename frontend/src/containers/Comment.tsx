import AppHeading from "../components/AppHeading"
import AppParagraph from "../components/AppParagraph"
import CommentContainer from "../components/CommentContainer"
import CommentPicture from "../components/AddCommentPicture"
import CommentProfile from "../components/CommentProfile"
import CommentHeader from "../components/CommentHeader"
import CommentActionList from "../components/CommentActionList"
import CommentAction from "../components/CommentAction"
import CommentReplyIcon from "../components/CommentReplyIcon"
function Comment() {
    return (
        <CommentContainer>
            <CommentHeader>
                <CommentProfile>
                    <CommentPicture
                        alt="juliusomo"
                        srcPrimary="./images/avatars/image-juliusomo.webp"
                        srcDefault="./images/avatars/image-juliusomo.png"
                    />
                    <AppHeading>
                        juliusomo
                    </AppHeading>
                    <AppParagraph>1 week ago</AppParagraph>
                </CommentProfile>
                <CommentActionList>
                    <CommentAction>
                        <CommentReplyIcon />
                        Delete
                    </CommentAction>
                    <CommentAction>
                        <CommentReplyIcon />
                        Edit
                    </CommentAction>
                    <CommentAction>
                        <CommentReplyIcon />
                        Reply
                    </CommentAction>


                </CommentActionList>
            </CommentHeader>
        </CommentContainer>
    )
}

export default Comment
