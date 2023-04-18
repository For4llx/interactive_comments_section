import { useState } from "react"
import CounterContainer from "../components/CounterContainer"
import CounterButton from "../components/CounterButton"
import CounterPlusIcon from "../components/CounterPlusIcon"
import CounterMinusIcon from "../components/CounterMinusIcon"
import CounterValue from "../components/CounterValue"

interface Props {
    counterValue: number
}

const Counter: React.FC<Props> = (props) => {
    const [count, setCount] = useState(props.counterValue);
    const [liked, setLiked] = useState(false);
    const [disliked, setDisliked] = useState(false);

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
