import { useEffect, useState } from "react"
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
    const [isDisabled, setDisabled] = useState(false)
    const [count, setCount] = useState<number>(0);
    const [liked, setLiked] = useState<boolean>(false);
    const [disliked, setDisliked] = useState<boolean>(false);

    console.log(currentUser.id)

    useEffect(() => {
        if (comment.user_liked?.length > 0) {
            setLiked(comment.user_liked[0]?.id === 5)
            setDisliked(comment.user_disliked[0]?.id === 5)
        }
        if (comment.user_disliked?.length > 0) {
            setLiked(comment.user_liked[0]?.id === 5)
            setDisliked(comment.user_disliked[0]?.id === 5)
        }
        setCount(comment.score)
    }, []);

    const mutationLikedComment = useMutation({
        mutationFn: likedComment
    })

    const mutationDislikedComment = useMutation({
        mutationFn: dislikedComment
    })

    const handleIncrementCount = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        e.preventDefault()
        setDisabled(true)
        if (liked === true) {
            setDisabled(false)
            return console.log("t'as déjà lické frero")
        } else if (disliked === true) {
            setCount(count + 1)
            setDisliked(false)
            setDisabled(false)

        } else if (liked === false && disliked === false) {
            setCount(count + 1)
            setLiked(true)
            setDisabled(false)

        }
        mutationLikedComment.mutate({ e, comment, liked, disliked, currentUser })
        setDisabled(false)
    }


    const handleDecrementCount = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        e.preventDefault()
        setDisabled(true)
        if (disliked === true) {
            setDisabled(false)
            return console.log("t'as déjà dislické frero")
        } else if (liked === true) {
            setCount(count - 1)
            setLiked(false)
            setDisabled(false)

        } else if (liked === false && disliked === false) {
            setCount(count - 1)
            setDisliked(true)
            setDisabled(false)
        }
        mutationDislikedComment.mutate({ e, comment, liked, disliked, currentUser })
    }

    return (
        <CounterContainer>
            <CounterButton id={comment.id} onClick={handleIncrementCount} disabled={isDisabled}>
                <CounterPlusIcon />
            </CounterButton>
            <CounterValue>{count}</CounterValue>
            <CounterButton id={comment.id} onClick={handleDecrementCount} disabled={isDisabled}>
                <CounterMinusIcon />
            </CounterButton>
        </CounterContainer>
    )
}

export default Counter