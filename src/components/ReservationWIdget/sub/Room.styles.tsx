import styled from "styled-components"

type DataProps = {
    src?: string
}

export const RoomStyles = styled.div`
    display: flex;
    margin: .4rem 0;
    align-items: center;
`
    
export const RoomImg = styled.img`
    height: 120px;
    border-radius: .4rem;
    margin-right: .4rem;
`

export const RoomDetails = styled.span`
    margin-left: .6rem;
    display: inline-block;
`

export const RoomDetail = styled.span`
    display: block;
    font-weight: ${props => props.bold && "bold"};
    margin: .6rem 0;
    word-wrap: break-word;
`