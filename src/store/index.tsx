import { combineReducers, createStore } from "redux"
import { calendarReducer } from './calendar/reducers'

const rootReducer = combineReducers({
  calendarReducer,
//   chat: chatReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default function configureStore() {
  return createStore(
    rootReducer,
  );
}