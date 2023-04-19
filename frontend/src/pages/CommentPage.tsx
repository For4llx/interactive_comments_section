import CommentList from '../containers/CommentList';
import AppContainer from '../components/AppContainer';
import { useState } from "react"
import { useQuery, useMutation } from "react-query";
import AddComment from '../containers/AddComment';
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
    id: number,
    image: {
        png: string,
        webp: string,
    },
    username: string,
}

function CommentPage() {
    const [comments, setComments] = useState<IComment[]>([]);
    const [currentUser, setCurrentUser] = useState<IUser>({
        id: 0,
        image: {
            png: "",
            webp: "",
        },
        username: "",
    }
    );

    async function fetchComments() {
        const response = await fetch("http://127.0.0.1:8000/comments/");
        return response.json();
    }

    async function fetchCurrentUser() {
        const response = await fetch("http://127.0.0.1:8000/users/5");
        return response.json();
    }


    useQuery('comments', fetchComments, { onSuccess: (data) => { setComments(data) } });
    useQuery('currentUser', fetchCurrentUser, { onSuccess: (data) => { setCurrentUser(data) } });

    const addComment = useMutation({
        mutationFn: async (e: React.FormEvent<HTMLFormElement>) => {
            const response = await fetch('http://127.0.0.1:8000/comments/', {
                method: 'POST',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    user: currentUser,
                    content: e.target.content.value,
                    reply: false
                }),
            })
            return response.json();
        },
        onSuccess: (comment) => setComments([...comments, comment])
    })

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
                        console.log("gfzregfdscxvdsvc ")
                        return { ...comment, replies: [...comment.replies, comment_instance] }
                    }
                    return comment;
                });
                setComments(updatedComments)
            }
        }
    })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        addComment.mutate(e)
    }

    const handleSubmit2 = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        addReply.mutate(e)
    }

    return (
        <AppContainer>
            <CommentList
                currentUser={currentUser}
                setcurrentUser={setCurrentUser}
                comments={comments}
                setComments={setComments}
                handleSubmit={handleSubmit2}
            />
            <AddComment
                id={currentUser.id}
                username={currentUser.username}
                srcPrimary={currentUser.image.webp}
                srcDefault={currentUser.image.png}
                buttonText="Send"
                handleSubmit={handleSubmit}
                buttonName="send"
            />
        </AppContainer>
    )
}

export default CommentPage
