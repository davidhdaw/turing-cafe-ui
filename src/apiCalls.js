export const getReservations = async () => {
    const response = await fetch(
      'http://localhost:3001/api/v1/reservations'  
    )
    if (!response.ok) {
        throw new Error(response.status);
    } else {
        return await response.json();
    }
}

export const MakeReservation = async (reservation) => {
    console.log(reservation)
    const postInfo = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
          },
        body: JSON.stringify(reservation)
    }
    await fetch(
      'http://localhost:3001/api/v1/reservations', postInfo 
    )
}