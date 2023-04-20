import AppContainer from '../app/AppContainer';
import CommentListReply from "./CommentListReply";
import Comment from "../comment"

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
}

const CommentList: React.FC<ICommentList> = ({ comments, currentUser }) => {
    return (
        <AppContainer>
            <>
                {comments.map((comment) => (
                    !comment.reply &&
                    <li key={comment.id}>
                        <Comment
                            comment={comment}
                            currentUser={currentUser}
                        />
                        <CommentListReply>
                            {comment.replies.map(reply => (
                                <li key={reply.id}>
                                    <Comment
                                        comment={reply}
                                        currentUser={currentUser}
                                    />
                                </li>
                            ))}
                        </CommentListReply>
                    </li>
                ))}
            </>
        </AppContainer>
    )
}

export default CommentList
