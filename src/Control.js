class Control {

  findDate() {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0')
    const yyyy = today.getFullYear();
    return `${yyyy}/${mm}/${dd}`;
  }

  findRoomsAvailable(rooms, bookings, date) {
    const bookedDates = this.bookingsByDate(bookings, date)
    const bookedRooms = bookedDates.map(booking => booking.roomNumber);
    const available = rooms.filter(room => bookedRooms.includes(room.number) === false);
    return available;
  }

  totalRevenueForDate(rooms, services, bookings, date) {
    const serviceDates = this.servicesByDate(services, date);
    const filteredCostsForServices = serviceDates.reduce((acc, currElem) => acc += currElem.totalCost, 0); 
    const datesBooked = this.bookingsByDate(bookings, date)
    const bookedRooms =  datesBooked.map(room => room.roomNumber)
    const filteredCostForRooms = bookedRooms.reduce((acc, currElem) => {
      const room = rooms.find(room => room.number === currElem)
      return acc += room.costPerNight;
    }, 0);
    return (filteredCostsForServices + filteredCostForRooms).toFixed(2)
  }

  percentageOfRoomsOccupied(rooms, bookings, date) {
    const roomsOccupied = rooms.length - this.findRoomsAvailable(rooms, bookings, date).length;
    return Math.floor((roomsOccupied / rooms.length) * 100) + '%'
  }

  // Should refactor these
  servicesByDate(services, date) {
    return services.filter(service => service.date === date)
  }
  
  bookingsByDate(bookings, date) {
    return bookings.filter(booking => booking.date === date)
  }
  
  guestsByName(guests, name) {
    return guests.filter(guest => guest.name.toLowerCase().includes(name.toLowerCase()))
  }
  
  //should refactor these
  getGuestByID(guests, id) {
    return guests.find(guest => guest.id === id)
  }
  
  servicesByID(services, id) {
    return services.filter(service => service.userID === id)
  }
  
  bookingsByID(bookings, id) {
    return bookings.filter(booking => booking.userID === id)
  }
}

export default Control;
