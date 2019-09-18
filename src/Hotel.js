import Guest from './Guest';
import Room from './Room';
import Booking from './Booking';
import Service from './Service';
// import domUpdates from './domUpdates';

class Hotel {
  constructor(guests, rooms, bookings, services) {
    this.guests = guests;
    this.rooms = rooms;
    this.bookings = bookings;
    this.services = services;
    this.selectedDate = '';
    this.selectedCustomer = null;
  }

  changeDate(date) {
    this.selectedDate = date
  }

  startHotel() {
    this.rooms = this.rooms.map(room => new Room(room));
    this.guests = this.guests.map(guest => new Guest(guest));
    this.bookings = this.bookings.map((booking, idx) => new Booking(booking, idx +1));
    this.services = this.services.map((service, idx)=> new Service(service, idx + 1)); 
  }
  
  addCustomer(name) {
    const newGuest = new Guest({ id: this.guests.length + 1 , name  })
    this.guests.push(newGuest);
    this.selectedCustomer = newGuest;
  }

  removeCustomer(id) {
    const newGuests = this.guests.filter(guest => guest.id !== id)
    this.guests = newGuests;
  }

}
export default Hotel;