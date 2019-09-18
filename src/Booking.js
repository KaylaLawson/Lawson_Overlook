class Booking {
  constructor(booking, id) {
    // assign for {userID, date, roomNumber}
    Object.assign(this, booking)
    this.id = id
  }

  cancelBooking() {
    
  }
}

export default Booking;
