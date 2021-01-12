import {
    UPDATE_STORE,
    CalendarState
} from "./types"

export function updateStore(name, payload: CalendarState) {
    return {
        type: UPDATE_STORE,
        name,
        payload
    }
}