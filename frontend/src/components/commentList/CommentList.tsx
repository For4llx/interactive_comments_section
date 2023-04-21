import AppContainer from '../app/AppContainer';
import CommentReplyList from "./CommentReplyList";
import CommentListItem from "./CommentListItem";
import Comment from "../comment"
import CommentListContainer from './CommentListContainer';
import CommentReplyListItem from './CommentReplyListItem';

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

interface ICommentList {
    comments: Array<IComment>
    currentUser: IUser
    setComments: Function
}

const CommentList: React.FC<ICommentList> = ({ comments, setComments, currentUser }) => {
    return (
        <CommentListContainer>
            {comments.map((comment) => (
                !comment.reply &&
                <CommentListItem key={comment.id}>
                    <Comment
                        comments={comments}
                        setComments={setComments}
                        comment={comment}
                        currentUser={currentUser}
                    />
                    {comment.replies.length > 0 &&
                        <>
                            <CommentReplyList>
                                {comment.replies.map(reply => (
                                    <CommentReplyListItem key={reply.id}>
                                        <Comment
                                            comment={reply}
                                            setComments={setComments}
                                            comments={comments}
                                            currentUser={currentUser}
                                        />
                                    </CommentReplyListItem>
                                ))}
                            </CommentReplyList>
                        </>
                    }
                </CommentListItem>

            ))}
        </CommentListContainer>
    )
}

export default CommentList
