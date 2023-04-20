import { useState } from "react"
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

    const handleIncrementCount = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        e.preventDefault()
        if (disliked) {
            setCount(count + 1)
            setDisliked(!disliked)
        } else if (!liked) {
            setCount(count + 1)
            setLiked(!liked)
        }
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
    }


    return (
        <CounterContainer>
            <CounterButton onClick={handleIncrementCount}>
                <CounterPlusIcon />
            </CounterButton>
            <CounterValue>{count}</CounterValue>
            <CounterButton onClick={handleDecrementCount}>
                <CounterMinusIcon />
            </CounterButton>
        </CounterContainer>
    )
}

export default Counter
