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

    const handleIncrementCount = (e): void => {
        e.preventDefault()
        setCount(e)
    }

    return (
        <CounterContainer>
            <CounterButton onClick={handleIncrementCount}>
                <CounterPlusIcon />
            </CounterButton>
            <CounterValue>{count}</CounterValue>
            <CounterButton onClick={() => setCount(prevCount => prevCount - 1)}>
                <CounterMinusIcon />
            </CounterButton>
        </CounterContainer>
    )
}

export default Counter
