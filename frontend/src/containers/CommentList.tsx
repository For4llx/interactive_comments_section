import CommentReplyList from "../components/CommentReplyList";
import Comment from "./Comment"
import AddComment from "./AddComment";
import { useState } from "react"

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

interface ICommentList {
    comments: Array<IComment>,
    setComments: Function,
    currentUser: any,
    setcurrentUser: Function,
    handleSubmit: Function
}

const CommentList: React.FC<ICommentList> = (props) => {
    return (
        <ul>
            {props.comments.map(comment => (
                !comment.reply &&
                <li key={comment.id}>
                    <Comment
                        id={comment.id}
                        username={comment.user.username}
                        currentUser={props.currentUser}
                        commentUserId={comment.user.id}
                        pictureSrcPrimary={comment.user.image.webp}
                        pictureSrcDefault={comment.user.image.png}
                        createdAt={comment.createdAt}
                        content={comment.content}
                        counterValue={comment.score}
                        comments={props.comments}
                        setComments={props.setComments}
                        handleSubmit={props.handleSubmit}
                    />
                    <CommentReplyList>
                        {comment.replies.map(reply => (
                            <li key={reply.id}>
                                <Comment
                                    id={reply.id}
                                    username={reply.user.username}
                                    currentUser={props.currentUser}
                                    commentUserId={reply.user.id}
                                    pictureSrcPrimary={reply.user.image.webp}
                                    pictureSrcDefault={reply.user.image.png}
                                    createdAt={reply.createdAt}
                                    content={reply.content}
                                    counterValue={reply.score}
                                    comments={props.comments}
                                    setComments={props.setComments}
                                    handleSubmit={props.handleSubmit}
                                />
                            </li>
                        ))}
                    </CommentReplyList>
                </li>
            ))}
        </ul>
    )
}

export default CommentList
