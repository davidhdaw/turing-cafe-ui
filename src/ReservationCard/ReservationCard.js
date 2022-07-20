import React from "react";
import './ReservationCard.css';

const ReservationCard = ({ReservationData}) => {
    return(
        <div className='reservation-card'>
        <h3>{ReservationData.name}</h3>
        <p>{ReservationData.date}</p>
        <p>{ReservationData.time}</p>
        <p>Number of Guests: {ReservationData.number}</p>
        <button className="CancelButton">Cancel</button>
        </div>
    )
}

export default ReservationCard