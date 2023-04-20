import CommentReplyList from "../components/CommentReplyList";
import Comment from "./Comment"
import AddComment from "./AddComment";
import { useState } from "react"

const CommentList: React.FC<ICommentList> = (props) => {
    return (
        <ul>
            {props.comments.map(comment => (
                !comment.reply &&
                <li key={comment.id}>
                    <Comment
                        comment={comment}
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
                    />
                    <CommentReplyList>
                        {comment.replies.map(reply => (
                            <li key={reply.id}>
                                <Comment
                                    comment={comment}
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
                                    parentId={reply.parent_id}
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
