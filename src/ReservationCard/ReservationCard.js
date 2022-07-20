import React from "react";
import './ReservationCard.css';
import { DeleteReservation } from "../apiCalls";

const ReservationCard = ({ReservationData, updateReservations}) => {

const deleteCard = (e) => {
    e.preventDefault()
    DeleteReservation(ReservationData.id)
    updateReservations()
}

    return(
        <div className='reservation-card'>
        <h3>{ReservationData.name}</h3>
        <p>{ReservationData.date}</p>
        <p>{ReservationData.time}</p>
        <p>Number of Guests: {ReservationData.number}</p>
        <button className="cancel-button" onClick={deleteCard}>Cancel</button>
        </div>
    )
}

export default ReservationCard