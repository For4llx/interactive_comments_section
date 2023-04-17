import { useState } from "react"
import { useQuery } from "react-query";
import CommentReplyList from "../components/CommentReplyList";
import Comment from "./Comment"

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

interface IUser {
    id: number;
    image?: {
        png: string
        webp: string
    }
    username: string
}



async function fetchComments() {
    const response = await fetch("http://127.0.0.1:8000/comments/");
    return response.json();
}

async function fetchCurrentUser() {
    const response = await fetch("http://127.0.0.1:8000/users/5");
    return response.json();
}


const CommentList: React.FC = () => {
    const [currentUser, setcurrentUser] = useState<IUser>({});
    const [comments, setComments] = useState<IComment[]>([]);
    useQuery('comments', fetchComments, { onSuccess: (data) => { setComments(data) } });
    useQuery('currentUser', fetchCurrentUser, { onSuccess: (data) => { setcurrentUser(data) } });

    return (
        <>
            {comments.map(comment => (
                !comment.reply &&
                <li key={comment.id}>
                    <Comment
                        username={comment.user.username}
                        currentUser={currentUser}
                        commentUserId={comment.user.id}
                        pictureSrcPrimary={comment.user.image.webp}
                        pictureSrcDefault={comment.user.image.png}
                        createdAt={comment.createdAt}
                        content={comment.content}
                        counterValue={comment.score}
                    />
                    <CommentReplyList>
                        {comment.replies.map(reply => (
                            <li key={reply.id}>
                                <Comment
                                    username={reply.user.username}
                                    currentUser={currentUser}
                                    commentUserId={reply.user.id}
                                    pictureSrcPrimary={reply.user.image.webp}
                                    pictureSrcDefault={reply.user.image.png}
                                    createdAt={reply.createdAt}
                                    content={reply.content}
                                    counterValue={reply.score}
                                />
                            </li>
                        ))}
                    </CommentReplyList>
                </li>
            ))}
        </>
    )
}

export default CommentList