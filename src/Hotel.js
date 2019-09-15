import Guest from './Guest';
import Room from './Room';
import Booking from './Booking';
import Service from './Service';

class Hotel {
  constructor(guests, rooms, bookings, services) {
    this.guests = guests;
    this.rooms = rooms;
    this.bookings = bookings;
    this.services = services;
    this.todaysDate = '';
    this.selectedDate = '';
    this.displayDate = '';
  }

  findDate() {
    let allMonths = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'August', 'Sept', 'Oct', 'Nov', 'Dec']
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0')
    let yyyy= today.getFullYear();
    this.todaysDate = `${yyyy}/${mm}/${dd}`;
    this.displayDate = `${allMonths[today.getMonth()]} ${today.getDate()}, ${yyyy}`
  }

  startHotel() {
    this.rooms = this.rooms.map(room => new Room(room));
    this.guests = this.guests.map(guest => new Guest(guest));
    this.bookings = this.bookings.map(booking => new Booking(booking));
    this.services = this.services.map(service => new Service(service)); 
  }
  
  
  findRoomsAvailable() {
    let rooms = this.rooms;
    let bookedDates = this.bookingsByDate(this.selectedDate || this.todaysDate)
    let bookedRooms = bookedDates.map(booking => booking.roomNumber);
    let available = rooms.filter(room => bookedRooms.includes(room.number) === false);
    return available;
  }

  totalRevenueForDate() {
    let serviceDates = this.servicesByDate(this.selectedDate || this.todaysDate);
    let filteredCosts = serviceDates.reduce((acc, currElem) => acc += currElem.totalCost, 0); 
    return filteredCosts
  }

  percentageOfRoomsOccupied() {
    let rooms = this.rooms
    let roomsOccupied = rooms.length - this.findRoomsAvailable().length;
    return Math.floor((roomsOccupied / rooms.length) * 100) + '%'
  }

  servicesByDate(date) {
    return this.services.filter(service => service.date === date)
  }

  bookingsByDate(date) {
    return this.bookings.filter(booking => booking.date === date)
  }

  guestsByName(name) {
    return this.guests.filter(guest => guest.name.toLowerCase().includes(name.toLowerCase()) && guest.id )
  }
}
export default Hotel;