import Guest from './Guest';
import Room from './Room';
import Booking from './Booking';
import Service from './Service';
import domUpdates from './domUpdates';

class Hotel {
  constructor(guests, rooms, bookings, services) {
    this.guests = guests;
    this.rooms = rooms;
    this.bookings = bookings;
    this.services = services;
    this.selectedDate = '';
    this.selectedCustomer = null;
  }

  findDate() {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0')
    const yyyy = today.getFullYear();
    this.selectedDate = `${yyyy}/${mm}/${dd}`;
  }

  startHotel() {
    this.rooms = this.rooms.map(room => new Room(room));
    this.guests = this.guests.map(guest => new Guest(guest));
    this.bookings = this.bookings.map(booking => new Booking(booking));
    this.services = this.services.map(service => new Service(service)); 
  }
  
  
  findRoomsAvailable() {
    const rooms = this.rooms;
    const bookedDates = this.bookingsByDate(this.selectedDate)
    const bookedRooms = bookedDates.map(booking => booking.roomNumber);
    const available = rooms.filter(room => bookedRooms.includes(room.number) === false);
    return available;
  }

  totalRevenueForDate() {
    const serviceDates = this.servicesByDate(this.selectedDate);
    const filteredCostsForServices = serviceDates.reduce((acc, currElem) => acc += currElem.totalCost, 0); 
    const filteredCostForRooms = this.rooms.reduce((acc, currElem ) => acc += currElem.costPerNight, 0);
    return (filteredCostsForServices + filteredCostForRooms).toFixed(2)
  }

  percentageOfRoomsOccupied() {
    const roomsLen = this.rooms.length
    const roomsOccupied = roomsLen - this.findRoomsAvailable().length;
    return Math.floor((roomsOccupied / roomsLen) * 100) + '%'
  }

  servicesByDate(date) {
    return this.services.filter(service => service.date === date)
  }

  bookingsByDate(date) {
    return this.bookings.filter(booking => booking.date === date)
  }

  guestsByName(name) {
    return this.guests.filter(guest => guest.name.toLowerCase().includes(name.toLowerCase()))
  }

  getGuestByID(id) {
    return this.guests.find(guest => guest.id === id)
  }

  servicesByID (id) {
    return this.services.filter(service => service.userID === id)
  }

  bookingsByID (id) {
    return this.bookings.filter(booking => booking.userID === id)
  }
}
export default Hotel;