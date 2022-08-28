import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducers/RootReducer'
//import counterReducer from '../features/counter/counterSlice'

export const store = configureStore({
  reducer:rootReducer

})