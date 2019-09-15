import $ from 'jquery';
import './css/base.scss';
import domUpdates from './domUpdates.js';
import Hotel from './Hotel';
import { getGuests, getRooms, getBookings, getServices } from './Fetch.js';

$( document ).ready(async function () {
  let hotel = new Hotel(await getGuests(), await getRooms(), await getBookings(), await getServices())
  // hotel.startHotel(await getGuests(), await getRooms(), await getBookings(), await getServices())
  console.log(hotel)
  hotel.startHotel()
  hotel.findDate();
  domUpdates.displayTodaysDate(hotel.displayDate); 
  domUpdates.displayTodaysDate(hotel.findRoomsAvailable())
  
  const $navBtn =$('.tab-btn');
  const $dateSubmit = $('#selectedDate')
  const tabs = {
    services: () => domUpdates.displayServices(hotel.servicesByDate(hotel.selectedDate || hotel.todaysDate)),
    bookings: () => domUpdates.displayBookings(hotel.bookingsByDate(hotel.selectedDate || hotel.todaysDate)),
    guests: () => domUpdates.displayGuests(hotel.guests),
  }

  $navBtn.click((e) => {
    tabs[e.target.id]()
  })

  $dateSubmit.click((e) => {
    e.preventDefault()
    hotel.selectedDate = $('#searchDate').val().replace(/-/g, "/");
  })
  
  $('.guest-search').keyup( (e) => {
    if ($('.guest-search').val() === ""){
      tabs.guests()
    } else {
      domUpdates.displayGuests(hotel.guestsByName($('.guest-search').val()))
    }
  })

});
