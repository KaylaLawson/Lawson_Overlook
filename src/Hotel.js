import Guests from './Guests';
import Rooms from './Rooms';
import Bookings from './Bookings';
import Services from './Services';

class Hotel {
  constructor() {
    this.guests = null;
    this.bookings = {};
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

  startHotel(guests, rooms, bookings, services) {
    this.rooms = new Rooms(rooms);
    this.guests = new Guests(guests);
    this.bookings = new Bookings(bookings);
    this.services = new Services(services); 
  }
  
  findRoomsAvailable() {
    // let bookingObj = Object.keys(this.bookings.bookingsData)
    // bookingObj.reduce((acc, currElem) => {
    //   let matchedDates = this.bookings.bookingsData[currElem].filter(booking => booking.date === this.date)
    //   matchedDates.map(booking => booking.roomNumber)
    //   let availableRooms = Object.keys(this.rooms)
    //   return acc;
    // }, [])
  }
    
  //create empty array
  //dive into array umbrella, for each array within the array 
  //and then for each entry, if matches then push into empty array
  //find length of the once empty array === bookings for that specific day
  // }
}
export default Hotel;