import React from "react";

const ReservationCard = ({reservationData}) => {
    return(
        <div className='reservation-card'>
        <h3>{reservationData.name}</h3>
        <p>date</p>
        <p>time</p>
        <p>Number of Guests: Num</p>
        <button className="CancelButton">Cancel</button>
        </div>
    )
}

export default ReservationCard