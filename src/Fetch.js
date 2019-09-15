export const getGuests = async () => {
  try {
   const response = await fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users')
   const data = await response.json()
    return data.users
  } catch (error) {
    console.log(error);
  }
}

export const getRooms = async () => {
  try {
  const response = await fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms')
    const data = await response.json()
    return data.rooms
  } catch (error) {
    console.log(error);
  }
}

export const getBookings = async () => {
  try {
  const response = await fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings');
      const data = await response.json()
       return data.bookings
  } catch (error) {
    console.log(error);
  }
}

export const getServices = async () => {
  try {
    const response = await fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/room-services/roomServices')
      const data = await response.json() 
      return data.roomServices
  } catch (error) {
    console.log(error)
  }
}