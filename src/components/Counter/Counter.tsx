import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  counterSliceActions,
  counterSliceSelectors,
} from "store/redux/counter/counterSlice"
import Button from "components/Button/Button"
import { CounterWrapper, Count, ButtonControl } from "./styles"

function Counter() {
  const dispatch = useAppDispatch()
  const count = useAppSelector(counterSliceSelectors.count)
  const onPlus = () => {
    dispatch(counterSliceActions.plus())
  }
  const onMinus = () => {
    dispatch(counterSliceActions.minus())
  }

  const onMultiply = () => {
    dispatch(counterSliceActions.multiply(2))
  }
  const onDivide = () => {
    dispatch(counterSliceActions.divide(2))
  }
  return (
    <CounterWrapper>
      <ButtonControl>
        <Button name="/" onClick={onDivide} />
      </ButtonControl>
      <ButtonControl>
        <Button name="-" onClick={onMinus} />
      </ButtonControl>
      <Count className="count">{count}</Count>
      <ButtonControl>
        <Button name="+" onClick={onPlus} />
      </ButtonControl>
      <ButtonControl>
        <Button name="*" onClick={onMultiply} />
      </ButtonControl>
    </CounterWrapper>
  )
}

export default Counter