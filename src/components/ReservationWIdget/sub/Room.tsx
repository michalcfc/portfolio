import React from "react"

import {
    RoomStyles,
    RoomImg,
    RoomDetails,
    RoomDetail
} from "./Room.styles"

const Room = ({
    room
}) => {
    return (
        <RoomStyles key={room.id}>
          <RoomImg src={room.image}/>
            <RoomDetails>
                <RoomDetail bold>{room.name}</RoomDetail>
                <RoomDetail>{room.roomType}</RoomDetail>
                <RoomDetail>Price: ${room.totalPrice}</RoomDetail>
            </RoomDetails>
        </RoomStyles>
    )
}

export default Room