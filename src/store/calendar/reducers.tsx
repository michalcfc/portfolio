import {
    CalendarState,
    UPDATE_STORE
} from './types'

const initialState: CalendarState = {
    reservation: {
        dateFrom: null,
        dateTo: null,
        adults: null,
        children: null,
    }
}

export function calendarReducer(
    state = initialState,
    action
): CalendarState {
    switch(action.type) {
        case UPDATE_STORE:  {
            return {
              reservation: {
                  ...state.reservation,
                  [action.name]: action.payload
            }
              
            }
          }
        default:
            return state
    }
}