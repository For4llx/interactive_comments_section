import { useState } from "react"
import { useMutation } from "react-query";
import CounterButton from "./CounterButton";
import CounterContainer from "./CounterContainer";
import CounterMinusIcon from "./CounterIconMinus";
import CounterPlusIcon from "./CounterIconPlus";
import CounterValue from "./CounterValue";

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

interface ICounter {
    comment: IComment
    currentUser: IUser
}

const Counter: React.FC<ICounter> = ({ comment, currentUser }) => {
    const [count, setCount] = useState<number>(comment.score);
    const [liked, setLiked] = useState<boolean>(comment.user_liked.includes(currentUser));
    const [disliked, setDisliked] = useState<boolean>(comment.user_disliked.includes(currentUser));

    const likedComment = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const response = await fetch(`http://127.0.0.1:8000/comments/${e.target.id}/`, {
            method: "PATCH",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                commentId: comment.id,
                currnetUserId: currentUser.id,
                score: comment.score + 1,
            })
        }
        )
        return response.json()
    }

    const dislikedComment = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const response = await fetch(`http://127.0.0.1:8000/comments/${e.target.id}/`, {
            method: "PATCH",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                score: comment.score - 1
            })
        }
        )
        return response.json()
    }

    const mutationLikedComment = useMutation({
        mutationFn: likedComment
    })

    const mutationDislikedComment = useMutation({
        mutationFn: dislikedComment
    })
    const handleIncrementCount = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        e.preventDefault()
        if (disliked) {
            setCount(count + 1)
            setDisliked(!disliked)
        } else if (!liked) {
            setCount(count + 1)
            setLiked(!liked)
        }
        mutationLikedComment.mutate(e)
    }

    const handleDecrementCount = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        e.preventDefault()
        if (liked) {
            setCount(count - 1)
            setLiked(!liked)
        } else if (!disliked) {
            setCount(count - 1)
            setDisliked(!disliked)
        }
        mutationDislikedComment.mutate(e)
    }


    return (
        <CounterContainer>
            <CounterButton id={comment.id} onClick={handleIncrementCount}>
                <CounterPlusIcon />
            </CounterButton>
            <CounterValue>{count}</CounterValue>
            <CounterButton id={comment.id} onClick={handleDecrementCount}>
                <CounterMinusIcon />
            </CounterButton>
        </CounterContainer>
    )
}

export default Counter
