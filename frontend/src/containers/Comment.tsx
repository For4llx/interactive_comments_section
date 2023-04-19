import { FormEventHandler, useCallback, useState } from 'react';
import { useQuery, useMutation, UseMutationResult } from "react-query";
import AppLayer from '../components/AppLayer';
import AppButton from '../components/AppButton'
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
import CommentOwner from "../components/CommentOwner"
import AddComment from "./AddComment"
import Counter from "./Counter"
import CommentModalContainer from '../components/CommentModalContainer';
import AddCommentTextarea from "../components/AddCommentTextarea"
import CommentEditForm from '../components/CommentEditForm';
import CommentModalForm from '../components/CommentModalForm';

interface IComment {
    id: number;
    user: {
        id: number
        username: string;
        image: {
            webp: string;
            png: string;
        };
    };
    createdAt: string;
    content: string;
    score: number;
    reply: boolean;
    replies: Array<IComment>;
    parentid?: number
}

interface Props {
    id: number,
    username: string,
    createdAt: string,
    content: string,
    counterValue: number,
    pictureSrcPrimary: string,
    pictureSrcDefault: string,
    currentUser: any,
    commentUserId: number,
    comments: Array<IComment>
    setComments: Function
    parentId?: number
    parentUsername?: string
}

const useToggle = (initialState: boolean = false): [boolean, any] => {
    // Initialize the state
    const [state, setState] = useState<boolean>(initialState);

    // Define and memorize toggler function in case we pass down the comopnent,
    // This function change the boolean value to it's opposite value
    const toggle = useCallback((): void => setState(state => !state), []);

    return [state, toggle]
}

const Comment: React.FC<Props> = (props) => {
    const [isDisplaying, setIsDisplaying] = useToggle(true);
    const [isReplyMode, setIsReplyMode] = useToggle();
    const [isEditMode, setIsEditMode] = useToggle();
    const [isDeletetMode, setIsDeleteMode] = useToggle();
    const [content, setContent] = useState(props.content);

    const handleEdit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        setContent(e.currentTarget.content.value)
        setIsEditMode()
    }

    const handleDeleteParent = (e: any): void => {
        e.preventDefault()
        setIsDisplaying()
        setIsDeleteMode()
    };

    const handleDeleteReply = (e: any): void => {
        e.preventDefault()
        setIsDisplaying()
        setIsDeleteMode()
    };

    const handleReply = (e: any): void => {
        e.preventDefault()
        props.setComments(props.comments.map(comment => {
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
                    user: props.currentUser,
                    content: e.target.content.value,
                    reply: false
                })
            }
            if (e.target.reply) {
                body = JSON.stringify({
                    user: props.currentUser,
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
                props.setComments([...props.comments, comment_instance])
            } else {
                const updatedComments = props.comments.map(comment => {
                    if (comment.id === comment_instance.parent_id) {
                        return { ...comment, replies: [...comment.replies, comment_instance] }
                    }
                    return comment;
                });
                props.setComments(updatedComments)
            }
        }
    })

    const handleAddReply = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        addReply.mutate(e)
        handleReply(e)
    }

    const EditComment = useMutation({
        mutationFn: async (e: React.FormEvent<HTMLFormElement>) => {
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
        }
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
        isDisplaying &&
        <>
            {isDeletetMode &&
                <AppLayer>
                    <CommentModalContainer>
                        <AppHeading large>Delete comment</AppHeading>
                        <AppParagraph>
                            Are you sure you want to delete this comment?
                            This will remove the comment and can’t be undone.
                        </AppParagraph>
                        <CommentModalForm>
                            <AppButton large cancel onClick={setIsDeleteMode}>No, cancel</AppButton>
                            {props.parentId ?
                                <AppButton large delete onClick={handleDeleteComment} name="deleteReply" id={props.id}>Yes, delete</AppButton>
                                :
                                <AppButton large delete onClick={handleDeleteComment} name="deleteComment" id={props.id}>Yes, delete</AppButton>
                            }
                        </CommentModalForm>
                    </CommentModalContainer>
                </AppLayer>
            }
            <CommentContainer>
                <Counter
                    counterValue={props.counterValue}
                />
                <CommentContent>
                    <CommentHeader>
                        <CommentProfile>
                            <CommentPicture
                                alt={props.username}
                                srcPrimary={props.pictureSrcPrimary}
                                srcDefault={props.pictureSrcDefault}
                            />
                            <AppHeading>
                                {props.username}
                            </AppHeading>
                            {props.currentUser.id == props.commentUserId &&
                                <CommentOwner>you</CommentOwner>
                            }
                            <AppParagraph>{props.createdAt}</AppParagraph>
                        </CommentProfile>
                        <CommentActionList>
                            {props.currentUser.id == props.commentUserId &&
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
                            <AddCommentTextarea
                                name='content'
                                defaultValue={content}
                            >
                            </AddCommentTextarea>
                            <AppButton id={props.id} name="edit">Update</AppButton>
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
                    id={props.id}
                    username={props.currentUser.username}
                    srcPrimary={props.currentUser.image.webp}
                    srcDefault={props.currentUser.image.png}
                    buttonText="Reply"
                    handleSubmit={handleAddReply}
                    buttonName="reply"
                    parentId={props.parentId}
                    parentUsername={props.username}
                />
            }

        </>
    )
}

export default Comment

/*props.setComments((current: any) => current.filter((comment: any) => comment.id != e.target.id))*/
/*
const childComment = props.comments.find((comment: any) => comment.id == e.target.id)
const parenComment = props.comments.find((comment: any) => comment.id == childComment?.parent_id)
const UpdatedReplies = parenComment?.replies.filter((comment: any) => comment.id != childComment?.id)
props.setComments(props.comments.map(comment => {
    if (comment.id == childComment?.parent_id) {
        return { ...comment, replies: UpdatedReplies };
    } else {
        return comment;
    }
}))
setIsDeleteMode()
*/