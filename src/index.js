import $ from 'jquery';
import './css/base.scss';
import domUpdates from './domUpdates.js';
import Hotel from './Hotel';
import { getGuests, getRooms, getBookings, getServices } from './Fetch.js';
// import {getRooms} from './Fetch';
// import {getBookings} from './Fetch.js';
// import {getServices} from './Fetch.js';


$( document ).ready(async function () {
  let hotel = new Hotel()
  hotel.startHotel(await getGuests(), await getRooms(), await getBookings(), await getServices())
  console.log(hotel)

// async function getGuests() {
//   try {
//    let response = await fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users')
//    const data = await response.json()
//     return data.users
//   } catch (error) {
//     console.log(error);
//   }
// }

// async function getRooms() {
//   try {
//   let response = await fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms')
//     const data = await response.json()
//     return data.rooms
//   } catch (error) {
//     console.log(error);
//   }
// }

// async function getBookings() {
//   try {
//   let response = await fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings');
//       const data = await response.json()
//        return data.bookings
//   } catch (error) {
//     console.log(error);
//   }
// }

// async function getServices() {
//   try {
//     let response = await fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/room-services/roomServices')
//       const data = await response.json() 
//       return data.roomServices
//   } catch (error) {
//     console.log(error)
//   }
// }

  hotel.findDate();
  domUpdates.displayTodaysDate(hotel.displayDate); 

const $navBtn =$('.tab-btn');

const tabs = {
  main: () => {console.log("main")},
  services: () => {console.log("services")},
  rooms: () => {console.log("rooms")},
  guests: () => {console.log("guests")},
}

$navBtn.click((e) => {
  tabs[e.target.id]()
})

});
