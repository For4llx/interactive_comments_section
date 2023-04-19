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
    handleSubmit: Function
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
    const [isReplyMode, setIsReplyMode] = useToggle();
    const [isEditMode, setIsEditMode] = useToggle();
    const [isDeletetMode, setIsDeleteMode] = useToggle();
    const [content, setContent] = useState(props.content);

    const handleEdit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        setContent(e.currentTarget.content.value)
        setIsEditMode()
    }

    const handleDelete = (e: any): void => {
        e.preventDefault()
        props.setComments((current: any) => current.filter((comment: any) => comment.id != e.target.id))
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

    const addComment = useMutation({
        mutationFn: async () => {
            const response = await fetch('http://127.0.0.1:8000/comments/', {
                method: 'POST',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    user: props.currentUser,
                    content: "test",
                    reply: false
                })
            })
            return response.json()
        }
    })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        addComment.mutate()
    }


    return (
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
                            <AppButton large delete onClick={handleDelete} id={props.id}>Yes, delete</AppButton>
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
                        <CommentEditForm onSubmit={handleEdit}>
                            <AddCommentTextarea
                                name='content'
                                defaultValue={content}
                            >
                            </AddCommentTextarea>
                            <AppButton>Update</AppButton>
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
                    handleSubmit={props.handleSubmit}
                    buttonName="reply"
                />
            }
        </>

    )
}

export default Comment

/*
     const createReply = async (reply: any, e: any) => {
         const response = await fetch(`http://127.0.0.1:8000/comments/218/`, {
             method: 'PATCH',
             headers: {
                 "Accept": "application/json",
                 "Content-Type": "application/json"
             },
             body: JSON.stringify({
                 "reply_id": reply.id,
             })
         })
         const comment = response.json()
         props.setComments([...props.comments, comment])
         console.log(props.comments)
         handleReply(e)
         return comment;
     }
 
     const createComment = async (e: any) => {
         e.preventDefault()
         const response = await fetch('http://127.0.0.1:8000/comments/', {
             method: 'POST',
             headers: {
                 "Accept": "application/json",
                 "Content-Type": "application/json"
             },
             body: JSON.stringify({
                 "user": props.currentUser,
                 "content": "content",
                 "reply": true,
             })
         })
         return response.json()
     };
     const { mutate: replyComment } = useMutation(createComment, {
         onSuccess: ((data, e) => {
             createReply(data, e)
         })
     })
     const { mutate: z } = useMutation(createComment, {
         onSuccess: ((data) => {
             console.log(data)
         })
     })
 */