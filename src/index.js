import $ from 'jquery';
import './css/base.scss';
import domUpdates from './domUpdates.js';
import Hotel from './Hotel';


$( document ).ready(function() {
  let hotel = new Hotel()

  getGuests();
  getRooms();
  getBookings();
  getServices();

  domUpdates.displayTodaysDate(); 
  
function getGuests() {
   fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users')
    .then(response => response.json())
    .then(guestData => console.log(guestData))
    .catch(error => console.log(error))
}

function getRooms() {
  fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms')
    .then(promise => promise.json())
    .then(roomData => console.log(roomData))
    .catch(error => console.log(error))
}

function getBookings() {
  fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings')
    .then(promise => promise.json())
    .then(roomData => console.log(roomData))
    .catch(error => console.log(error))
}

function getServices() {
  fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/room-services/roomServices')
    .then(promise => promise.json()) 
    .then(serviceData => console.log(serviceData))
    .catch(error => console.log(error))
}



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
