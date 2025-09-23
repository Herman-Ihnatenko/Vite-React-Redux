import { PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "store/createAppSlice"
import { CounterSliceState } from "./types"

const counterInitinalState: CounterSliceState = {
  count: 0,
}

export const counterSlice = createAppSlice({
  name: "COUNTER",
  initialState: counterInitinalState,
  reducers: create => ({
    plus: create.reducer((state: CounterSliceState) => {
      state.count = state.count + 1
    }),
    minus: create.reducer((state: CounterSliceState) => {
      state.count = state.count - 1
    }),
    multiply: create.reducer((state: CounterSliceState, actions: PayloadAction<number>) => {
      state.count = Number((state.count * actions.payload).toFixed(2))
    }),
    divide: create.reducer((state: CounterSliceState, actions: PayloadAction<number>) => {
      state.count = Number((state.count / actions.payload).toFixed(2))
    }),
    reset: create.reducer((state: CounterSliceState) => {
      state.count = 0
    }),
  }),
  selectors: {
    count: (state: CounterSliceState) => {
      return state.count
    },
  },
})

export const counterSliceActions = counterSlice.actions
export const counterSliceSelectors = counterSlice.selectors
