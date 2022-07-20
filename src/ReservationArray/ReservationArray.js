import React from 'react'
import ReservationCard from '../ReservationCard/ReservationCard'

const ReservationArray = ({reservations, updateReservations}) => {
    return(
       <>
        {reservations.map(reservation => <ReservationCard ReservationData={reservation} updateReservations={updateReservations} />)}       
       </> 
    )
}

export default ReservationArray