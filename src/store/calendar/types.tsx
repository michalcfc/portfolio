export const UPDATE_STORE = 'UPDATE_STORE'

export interface Data {
    dateFrom: Date
    dateTo: Date
    adults: number
    children: number
  }
  

  export interface CalendarState {
    reservation: Data
  }
