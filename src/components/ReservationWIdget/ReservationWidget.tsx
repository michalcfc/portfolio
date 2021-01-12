import jsonp from "jsonp"
import { connect } from "react-redux";
import React, { useState, useEffect } from "react"

import { 
  WidgetContainer,
  WidgetRow,
  WidgetHeader,
  WidgetBody,
  StyledDatePickerWrapper
} from "./ReservationWIdget.styles"

import { 
  ReservationWidgetProps
} from "./ReservationWidget.d";

import { 
  updateStore,
} from "../../store/calendar/actions";

import Select  from "../Select"
import Loader from "../Loader"
import Room from "./sub/Room"

import moment from 'moment';
import { DateRangePicker } from 'react-dates';

const ReservationWidget: React.FC<ReservationWidgetProps> = (
  props
) =>  {
  const [dateRange, setDateRange] = useState({
    startDate: null,
    endDate: null
  })
  const [rooms, setRooms] = useState([])
  const [loader, setLoader] = useState(true)
  const [adults, setAdults] = useState(null)
  const [children, setChildren] = useState(null)
  const [focusedInput, setFocuesdInput] = useState(null)

  const StartDate = dateRange.startDate && dateRange.startDate.format("Y-MM-DD")
  const EndDate = dateRange.endDate && dateRange.endDate.format("Y-MM-DD")

  const ROOMS_ENDPOINT = `http://testapi.itur.pl/api.php?date_from=${StartDate}&date_to=${EndDate}&nb_adults=${adults}&nb_children==${children}&callback=processResponse`

  useEffect(() => {
    fechRoomsData()
  }, [ROOMS_ENDPOINT]);

  const fechRoomsData = () => {
    setLoader(true)
    setTimeout(() => {
      jsonp(ROOMS_ENDPOINT, (err, rooms) => {
          if (err) throw err;
          setRooms(rooms)
          setLoader(false)
        })
    }, 1200)
  }

  const adultsHandler = (e) => {
    setAdults(e.target.value)
    props.updateStore("adults", adults)
  }

  const childrenHandler = (e) => {
    setChildren(e.target.value)
    props.updateStore("children", children)
  }

  const focusedInputHandler = (focusedInput) => {
    setFocuesdInput(focusedInput)
  }

  const dateChangeHandler = ({ startDate, endDate }) => {
    const StartDate = moment(startDate).format("Y-MM-DD")
    const EndDate = moment(endDate).format("Y-MM-DD")
        setDateRange({
          startDate,
          endDate
        })
    props.updateStore("dateFrom", StartDate)
    props.updateStore("dateTo", EndDate)
  }

  console.table(props.reservation)

  const renderRoomsList = () => (
    <>
      {rooms.map(roomData => {
        return <Room key={roomData.id} room={roomData} />
      })}
    </>
  )

  const { startDate, endDate } = dateRange
  
  return (
      <>
        <WidgetContainer> 
          <WidgetHeader>
            <h3>Please choose dates and guest informations to see prices:</h3>
          </WidgetHeader>
          <WidgetBody>
            <StyledDatePickerWrapper>
              <DateRangePicker 
                numberOfMonths={1}
                endDate={endDate} 
                startDatePlaceholderText={"Choose start date"}
                endDatePlaceholderText={"Choose end date"}
                startDate={startDate}
                focusedInput={focusedInput}
                onFocusChange={focusedInput => focusedInputHandler(focusedInput)}
                onDatesChange={({startDate, endDate}) => dateChangeHandler({startDate, endDate})}
              />
            </StyledDatePickerWrapper>
            <WidgetRow>
              <Select 
                numberOptionsValue
                label="Adults"
                onChange={(e) => adultsHandler(e)}
                />
              <Select 
                numberOptionsValue
                label="Children"
                onChange={(e) => childrenHandler(e)}
                />
            </WidgetRow>
              {loader ? <Loader /> : renderRoomsList()}
              <i>Results: {rooms.length}</i>
          </WidgetBody>
        </WidgetContainer>
      </>
  )
}

const mapStateToProps = state => {
  return {
    reservation: state.calendarReducer.reservation,
    }
  };

const mapDispatchToProps = dispatch => {
  return {
    updateStore: (name, state) => dispatch(updateStore(name, state)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReservationWidget);