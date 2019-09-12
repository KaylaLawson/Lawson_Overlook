import Guests from './Guests';
import Rooms from './Rooms';
import Bookings from './Bookings';
import Services from './Services';

class Hotel {
  constructor() {
    this.guests = [];
    this.bookings = [];
    this.rooms = [];
    this.date = '';
  }

  startHotel() {
    let room = new Rooms();
    let guest = new Guests();
    let booking = new Bookings();
    let service = new Services(); 
  }

  getGuests() {

  }

  getBookings() {

  }

  getRooms() {

  }
  
}
export default Hotel;