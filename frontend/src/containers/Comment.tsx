import AppHeading from "../components/AppHeading"
import AppParagraph from "../components/AppParagraph"
import CommentContainer from "../components/CommentContainer"
import CommentPicture from "../components/AddCommentPicture"
import CommentProfile from "../components/CommentProfile"
import CommentHeader from "../components/CommentHeader"
import CommentActionList from "../components/CommentActionList"
import CommentAction from "../components/CommentAction"
import CommentReplyIcon from "../components/CommentReplyIcon"
import CommentDeleteIcon from "../components/CommentDeleteIcon"
import CommentEditIcon from "../components/CommentEditIcon"
import CommentContent from "../components/CommentContent"

function Comment() {
    return (
        <CommentContainer>
            <CommentContent>
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
                        <CommentAction delete>
                            <CommentDeleteIcon />
                            Delete
                        </CommentAction>
                        <CommentAction>
                            <CommentEditIcon />
                            Edit
                        </CommentAction>
                        <CommentAction>
                            <CommentReplyIcon />
                            Reply
                        </CommentAction>
                    </CommentActionList>
                </CommentHeader>
                <AppParagraph>
                    Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You’ve nailed the design and the responsiveness at various breakpoints works really well.
                </AppParagraph>
            </CommentContent>
        </CommentContainer>
    )
}

export default Comment
