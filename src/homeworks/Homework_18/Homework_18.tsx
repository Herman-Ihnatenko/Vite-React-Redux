import { useAppDispatch, useAppSelector } from "store/hooks"
import { useEffect } from "react"

import {
  randomJokesActions,
  randomJokesSelectors,
} from "store/redux/randomJoke/randomJokeSlice"
import { RandomJoke } from "store/redux/randomJoke/types"

import Button from "components/Button/Button"

import {
  PageWrapper,
  JokeCard,
  RandomJokeContainer,
  JokeText,
  JokeWrapper,
  ButtonControl,
} from "./styles"
function Homework_18() {
  const dispatch = useAppDispatch()
  const { jokes, error } = useAppSelector(
    randomJokesSelectors.jokesData,
  )

  const getRandomJoke = () => {
    dispatch(randomJokesActions.getRandomJokes("Some photo"))
  }

  const deleteAllJokes = () => {
    dispatch(randomJokesActions.deleteAllJokes())
  }

  const handleDeleteJoke = (jokeId: string) => {
    dispatch(randomJokesActions.deleteJoke(jokeId))
  }

  const handleGetRandomJoke = () => {
    getRandomJoke()
  }

  const renderJokes = () => {
    return jokes.map((randomJoke: RandomJoke, index: number) => (
      <JokeWrapper key={randomJoke.id}>
        <JokeText>{`${index + 1}. ${randomJoke.joke}`}</JokeText>
        <ButtonControl>
          <Button
            isRed
            onClick={() => handleDeleteJoke(randomJoke.id)}
            name="Delete Joke"
          />
        </ButtonControl>
      </JokeWrapper>
    ))
  }

  useEffect(() => {
    if (error) {
      alert(error)
    }
  }, [error])

  return (
    <PageWrapper>
      <RandomJokeContainer>
        <JokeCard>
          <ButtonControl>
            <Button onClick={handleGetRandomJoke} name="Get Random Joke" />
          </ButtonControl>
          {renderJokes()}
          <ButtonControl>
            <Button onClick={deleteAllJokes} name="Delete All Jokes" isRed />
          </ButtonControl>
        </JokeCard>
      </RandomJokeContainer>
    </PageWrapper>
  )
}
export default Homework_18
