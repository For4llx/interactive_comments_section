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
import { useMutation } from "react-query"

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
    comments: Array<IComment>
    setComments: Function
    comment: IComment
    currentUser: IUser
}

const Comment: React.FC<ICommentItem> = ({ comment, comments, setComments, currentUser }) => {
    const [isDeleted, setIsisDeleted] = useToggle(false);
    const [isReplyMode, setIsReplyMode] = useToggle(false);
    const [isEditMode, setIsEditMode] = useToggle(false);
    const [isDeleteMode, setIsDeleteMode] = useToggle(false);
    const [content, setContent] = useState(comment.content)

    const handleEdit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        setContent(e.currentTarget.content.value)
        setIsEditMode()
    }

    const handleDeleteParent = (e: any): void => {
        e.preventDefault()
        setIsisDeleted()
        setIsDeleteMode()
    };

    const handleDeleteReply = (e: any): void => {
        e.preventDefault()
        setIsisDeleted()
        setIsDeleteMode()
    };

    const handleReply = (e: any): void => {
        e.preventDefault()
        setComments(comments.map(comment => {
            if (comment.id === Number(e.target.id)) {
                return { ...comment, replies: [...comment.replies, comment] };
            } else {
                return comment;
            }
        }))
        setIsReplyMode()
    };

    const addReply = useMutation({
        mutationFn: async (e: React.FormEvent<HTMLFormElement>) => {
            let body = ""
            if (e.target.send) {
                body = JSON.stringify({
                    user: currentUser,
                    content: e.target.content.value,
                    reply: false
                })
            }
            if (e.target.reply) {
                body = JSON.stringify({
                    user: currentUser,
                    content: e.target.content.value,
                    reply: true,
                    parent_id: e.target.reply.id,
                })
            }
            const response = await fetch('http://127.0.0.1:8000/comments/', {
                method: 'POST',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: body
            })
            return response.json()
        },
        onSuccess: (comment_instance) => {
            if (!comment_instance.reply) {
                setComments([...comments, comment_instance])
            } else {
                const updatedComments = comments.map(comment => {
                    if (comment.id === comment_instance.parent_id) {
                        return { ...comment, replies: [...comment.replies, comment_instance] }
                    }
                    return comment;
                });
                setComments(updatedComments)
            }
        }
    })

    const handleAddReply = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        addReply.mutate(e)
        handleReply(e)
    }

    const EditComment = useMutation({
        mutationFn: (async (e: React.FormEvent<HTMLFormElement>) => {
            const response = await fetch(`http://127.0.0.1:8000/comments/${e.target.edit.id}/`, {
                method: 'PATCH',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "id": e.target.edit.id,
                    "content": e.target.content.value,
                })
            })
            return response.json()
        })
    })

    const handleEditComment = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        EditComment.mutate(e)
        handleEdit(e)
    }

    const DeleteComment = useMutation({
        mutationFn: async (e: React.FormEvent<HTMLFormElement>) => {
            const response = await fetch(`http://127.0.0.1:8000/comments/${e.target.id}/`, {
                method: 'DELETE',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
            })
            return response.json()
        }
    })

    const handleDeleteComment = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (e.currentTarget.name === "deleteReply") {
            handleDeleteReply(e)
        } else {
            handleDeleteParent(e)
        }
        DeleteComment.mutate(e)
    }


    return (
        <>
            {!isDeleted &&
                <>
                    {isDeleteMode &&
                        <Modal
                            id={comment.id}
                            parentId={comment.parentId}
                            setIsDeleteMode={setIsDeleteMode}
                            handleDeleteComment={handleDeleteComment}
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
                                <CommentEditForm onSubmit={handleEditComment}>
                                    <AppTextarea
                                        name='content'
                                        defaultValue={content}
                                    >
                                    </AppTextarea>
                                    <AppButton id={comment.id} name="edit">Update</AppButton>
                                </CommentEditForm>
                                :
                                <AppParagraph>
                                    {content}
                                </AppParagraph>
                            }
                        </CommentContent>
                    </CommentContainer>
                    {isReplyMode &&
                        <AddComment
                            currentUser={currentUser}
                            buttonText="Reply"
                            buttonName="reply"
                            isReplyMode={true}
                            comment={comment}
                            replyToUser={comment.user}
                            handleAddReply={handleAddReply}
                        />
                    }
                </>
            }
        </>
    )
}

export default Comment
