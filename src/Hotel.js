import Guests from './Guests';
import Rooms from './Rooms';
import Bookings from './Bookings';
import Services from './Services';

class Hotel {
  constructor() {
    this.guests = null;
    this.bookings = null;
    this.rooms = null;
    this.services = null;
    this.date = ' ';
    this.displayDate = ' ';
  }

  findDate() {
    let allMonths = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'August', 'Sept', 'Oct', 'Nov', 'Dec']

    let today = new Date();
    
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0')
    let yyyy= today.getFullYear();
    this.date = `${yyyy}/${mm}/${dd}`;
    
    this.displayDate = `${allMonths[today.getMonth()]} ${today.getDate()}, ${yyyy}`
  }

  startHotel() {
    this.rooms = new Rooms();
    this.guests = new Guests();
    this.bookings = new Bookings();
    this.services = new Services(); 
  }

  getGuests() {

  }

  getBookings() {

  }

  getRooms() {

  }
  
}
export default Hotel;