import { configureStore } from '@reduxjs/toolkit'
import userReducer  from './reducers/UserReducer'
//import counterReducer from '../features/counter/counterSlice'

export const store = configureStore({
  reducer: {
    user: userReducer
  },
})