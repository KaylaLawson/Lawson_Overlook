import $ from 'jquery';
import './css/base.scss';
import domUpdates from './domUpdates.js';
import Hotel from './Hotel';
import { getGuests, getRooms, getBookings, getServices } from './Fetch.js';

$( document ).ready(async function () {
  let hotel = new Hotel(await getGuests(), await getRooms(), await getBookings(), await getServices())
  console.log(hotel)
  hotel.startHotel()
  hotel.findDate();
  domUpdates.displayTodaysDate(hotel.selectedDate)
  domUpdates.displayRoomsAvailable(hotel.findRoomsAvailable().length)
  domUpdates.displayTodaysRevenue(hotel.totalRevenueForDate());
  domUpdates.displayPercentageOfRoomsOccupied(hotel.percentageOfRoomsOccupied());


  const $navBtn =$('.tab-btn');
  const $dateSubmit = $('#selectedDate')
  const tabs = {
    services: () => domUpdates.displayServices(hotel.servicesByDate(hotel.selectedDate)),
    bookings: () => domUpdates.displayBookings(hotel.bookingsByDate(hotel.selectedDate)),
    guests: () => domUpdates.displayGuests(hotel.guests),
  }
  const guestTabs = {
    services: () => domUpdates.displayServices(hotel.servicesByID(hotel.selectedCustomer.id)),
    bookings: () => domUpdates.displayBookings(hotel.bookingsByID(hotel.selectedCustomer.id)),
    guests: () => domUpdates.displayGuests(hotel.guests),
  }

  $navBtn.click((e) => {
    if (hotel.selectedCustomer !== null) {
      guestTabs[e.target.id]()
    } else {
      tabs[e.target.id]()
    }
  })

  $dateSubmit.click((e) => {
    e.preventDefault()
    hotel.selectedDate = $('#searchDate').val().replace(/-/g, "/");
    domUpdates.displayRoomsAvailable(hotel.findRoomsAvailable().length);
    domUpdates.displayTodaysRevenue(hotel.totalRevenueForDate());
    domUpdates.displayPercentageOfRoomsOccupied(hotel.percentageOfRoomsOccupied());
  })
  
  $('.guest-search').keyup( (e) => {
    if ($('.guest-search').val() === ""){
      tabs.guests()
    } else {
      domUpdates.displayGuests(hotel.guestsByName($('.guest-search').val()))
    }
  })

  $('.content').click(e => {
    if (e.target.classList.contains('guest-tab')) {
      hotel.selectedCustomer = hotel.getGuestByID(parseInt(e.target.id))
      console.log(hotel)
    }
  })

});














