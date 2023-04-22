import { useState } from "react"
import { useMutation } from "react-query";
import { likedComment, dislikedComment } from "./CounterAPI";
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
    const [count, setCount] = useState<number>(0);
    const [liked, setLiked] = useState<boolean>(false);
    const [disliked, setDisliked] = useState<boolean>(false);

    const mutationLikedComment = useMutation({
        mutationFn: likedComment
    })

    const mutationDislikedComment = useMutation({
        mutationFn: dislikedComment
    })

    const handleIncrementCount = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        e.preventDefault()
        if (liked === true) {
            return console.log("t'as déjà lické frero")
        } else if (disliked === true) {
            setCount(count + 1)
            setDisliked(false)
        } else if (liked === false && disliked === false) {
            setCount(count + 1)
            setLiked(true)
        }
    }

    const handleDecrementCount = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        e.preventDefault()
        if (disliked === true) {
            return console.log("t'as déjà dislické frero")
        } else if (liked === true) {
            setCount(count - 1)
            setLiked(false)
        } else if (liked === false && disliked === false) {
            setCount(count - 1)
            setDisliked(true)
        }

        // mutationLikedComment.mutate({ e, comment, liked, disliked, currentUser })
        // mutationDislikedComment.mutate({ e, comment, liked, disliked, currentUser })
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
