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