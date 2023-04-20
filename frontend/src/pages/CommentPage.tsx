import Comment from '../components/comment';
import CommentList from '../components/commentList';
import AddComment from '../components/addComment';
import { useQuery } from 'react-query';
import { useState } from 'react';

async function fetchCurrentUser() {
    const response = await fetch("http://127.0.0.1:8000/users/5");
    return response.json();
}

async function fetchComments() {
    const response = await fetch("http://127.0.0.1:8000/comments/");
    return response.json();
}

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

function CommentPage() {
    const [comments, setComments] = useState<IComment[]>([]);
    const [currentUser, setCurrentUser] = useState<IUser>({
        id: 0,
        username: "",
        image: {
            webp: "",
            png: "",
        }
    })
    useQuery('currentUser', fetchCurrentUser, { onSuccess: (data) => { setCurrentUser(data) } });
    useQuery('comments', fetchComments, { onSuccess: (data) => { setComments(data) } });

    return (
        <>
            <CommentList
                comments={comments}
                currentUser={currentUser}
            />
            <AddComment
                currentUser={currentUser}
                buttonText="Send"
            />
        </>
    )
}

export default CommentPage


/*
            <CommentList/>
            <AddComment
                id={currentUser.id}
                username={currentUser.username}
                srcPrimary={currentUser.image.webp}
                srcDefault={currentUser.image.png}
                buttonText="Send"
                handleSubmit={handleAddComment}
                buttonName="send"
            />
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

    const handleAddComment = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        addComment.mutate(e)
    }
*/