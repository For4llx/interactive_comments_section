import CounterContainer from "../components/CounterContainer"
import CounterButton from "../components/CounterButton"
import CounterPlusIcon from "../components/CounterPlusIcon"
import CounterMinusIcon from "../components/CounterMinusIcon"
import CounterValue from "../components/CounterValue"

function Counter() {
    return (
        <CounterContainer>
            <CounterButton>
                <CounterPlusIcon />
            </CounterButton>
            <CounterValue>0</CounterValue>
            <CounterButton>
                <CounterMinusIcon />
            </CounterButton>
        </CounterContainer>
    )
}

export default Counter
