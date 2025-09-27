export interface RandomJoke {
  id: string
  joke: string
}

export interface RandomJokeSliceState {
  jokes: RandomJoke[]
  error: string | undefined
  isFetching: boolean
}
