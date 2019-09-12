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

  findDate() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0')
    let yyyy= today.getFullYear();
    this.date = `${yyyy}/${mm}/${dd}`;
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