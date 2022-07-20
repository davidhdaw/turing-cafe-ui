import React from 'react'
import ReservationCard from '../ReservationCard/ReservationCard'

const ReservationArray = ({reservations}) => {
    return(
       <>
        {reservations.map(reservation => <ReservationCard ReservationData={reservation} />)}       
       </> 
    )
}

export default ReservationArray