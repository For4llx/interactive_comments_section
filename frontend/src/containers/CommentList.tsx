import { useState } from "react"
import { useQuery } from "react-query";
import CommentReplyList from "../components/CommentReplyList";
import Comment from "./Comment"

interface CommentInterface {
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
    replies: Array<CommentInterface>;
}


async function fetchComments() {
    const response = await fetch("http://127.0.0.1:8000/comments/");
    return response.json();
}
const CommentList: React.FC = () => {
    const [comments, setComments] = useState<CommentInterface[]>([]);
    useQuery('comments', fetchComments, { onSuccess: (data) => { setComments(data) } });

    return (
        <>
            {comments.map(comment => (
                !comment.reply &&
                <li key={comment.id}>
                    <Comment
                        username={comment.user.username}
                        currentUser={5}
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
                                    currentUser={4}
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