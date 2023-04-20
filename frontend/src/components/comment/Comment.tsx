import { useState } from "react"
import Modal from "../modal"
import Counter from "../counter"
import AddComment from "../addComment"
import AppHeading from "../app/AppHeading"
import AppParagraph from "../app/AppParagraph"
import AppButton from "../app/AppButton"
import AppTextarea from "../app/AppTextarea"
import CommentContainer from "./CommentContainer"
import CommentAction from "./CommentAction"
import CommentActionList from "./CommentActionList"
import CommentContent from "./CommentContent"
import CommentHeader from "./CommentHeader"
import CommentProfile from "./CommentProfile"
import CommentPicture from "./CommentPicture"
import CommentOwner from "./CommentOwner"
import CommentEditIcon from "./CommentEditIcon"
import CommentDeleteIcon from "./CommentDeleteIcon"
import CommentReplyIcon from "./CommentReplyIcon"
import CommentEditForm from "./CommentEditForm"
import useToggle from "../utils/useToogle"

interface IUser {
    id: number
    username: string;
    image: {
        webp: string;
        png: string;
    }
}

interface IComment {
    id: number
    user: IUser
    parentId: number
    content: string
    score: number
    reply: boolean
    user_liked: Array<IUser>
    user_disliked: Array<IUser>
    replies: Array<IComment>
}

interface ICommentItem {
    comment: IComment
    currentUser: IUser
}

const Comment: React.FC<ICommentItem> = ({ comment, currentUser }) => {
    const [isDeleted, setIsisDeleted] = useToggle(false);
    const [isReplyMode, setIsReplyMode] = useToggle(false);
    const [isEditMode, setIsEditMode] = useToggle(false);
    const [isDeleteMode, setIsDeleteMode] = useToggle(false);

    return (
        <>
            {!isDeleted &&
                <>
                    {isDeleteMode &&
                        <Modal
                            id={comment.id}
                            parentId={comment.parentId}
                            setIsDeleteMode={setIsDeleteMode}
                        />
                    }
                    <CommentContainer>
                        <Counter
                            comment={comment}
                            currentUser={currentUser}
                        />
                        <CommentContent>
                            <CommentHeader>
                                <CommentProfile>
                                    <CommentPicture
                                        alt={comment.user.username}
                                        srcPrimary={comment.user.image.webp}
                                        srcDefault={comment.user.image.png}
                                    />
                                    <AppHeading>
                                        {comment.user.username}
                                    </AppHeading>
                                    {currentUser.id == comment.user.id &&
                                        <CommentOwner>you</CommentOwner>
                                    }
                                    <AppParagraph>date</AppParagraph>
                                </CommentProfile>
                                <CommentActionList>
                                    {currentUser.id == comment.user.id &&
                                        <>
                                            <CommentAction delete onClick={setIsDeleteMode}>
                                                <CommentDeleteIcon />
                                                Delete
                                            </CommentAction>
                                            <CommentAction onClick={setIsEditMode}>
                                                <CommentEditIcon />
                                                Edit
                                            </CommentAction>
                                        </>
                                    }
                                    <CommentAction onClick={setIsReplyMode}>
                                        <CommentReplyIcon />
                                        Reply
                                    </CommentAction>
                                </CommentActionList>
                            </CommentHeader>
                            {isEditMode ?
                                <CommentEditForm>
                                    <AppTextarea
                                        name='content'
                                        defaultValue={comment.content}
                                    >
                                    </AppTextarea>
                                    <AppButton id={comment.id} name="edit">Update</AppButton>
                                </CommentEditForm>
                                :
                                <AppParagraph>
                                    {comment.content}
                                </AppParagraph>
                            }
                        </CommentContent>
                    </CommentContainer>
                    {isReplyMode &&
                        <AddComment
                            currentUser={currentUser}
                            buttonText="Reply"
                            buttonName="reply"
                        />
                    }
                </>
            }
        </>
    )
}

export default Comment
