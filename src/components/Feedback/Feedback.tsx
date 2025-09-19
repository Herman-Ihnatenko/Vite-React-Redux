import Button from "components/Button/Button"
import { useAppDispatch, useAppSelector } from "store/hooks"
import { useState } from 'react';
import {
  FeedbackWrapper,
  FeedbackControl,
  Count,
  ButtonwithcountContainer,
} from "./styles"

import {
  counterSliceActions,
  counterSliceSelectors,
} from "store/redux/counter/counterSlice"

function Feedback() {
  const dispatch = useAppDispatch()
  const [dislikeCount, setDislikeCount] = useState(useAppSelector(counterSliceSelectors.count))
  const [likeCount, setLikeCount] = useState(useAppSelector(counterSliceSelectors.count))

  const onLike = () => {
    setLikeCount(prevCount => prevCount + 1)
  }

  const onDislike = () => {
    setDislikeCount(prevCount => prevCount + 1)
  }

  const resetResults = () => {
    setDislikeCount(0)
    setLikeCount(0)
    dispatch(counterSliceActions.reset())
  }
  return (
    <FeedbackWrapper>
      <FeedbackControl>
        <Button name="Dislike" onClick={onDislike} />
        <Count className="count">{dislikeCount}</Count>
      </FeedbackControl>
      <FeedbackControl>
        <Button name="Like" onClick={onLike} />
        <Count className="count">{likeCount}</Count>
      </FeedbackControl>
      <ButtonwithcountContainer>
        <Button name="Reset" onClick={resetResults} />
      </ButtonwithcountContainer>
    </FeedbackWrapper>
  )
}

export default Feedback