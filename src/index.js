import $ from 'jquery';
import './css/base.scss';
import domUpdates from './domUpdates.js';
import Hotel from './Hotel';
import Control from'./Control';
import { getGuests, getRooms, getBookings, getServices } from './Fetch.js';

$( document ).ready(async function () {
  let hotel = new Hotel(await getGuests(), await getRooms(), await getBookings(), await getServices())
  let control = new Control();
  console.log(hotel)
  hotel.startHotel()
  hotel.changeDate(control.findDate());
  domUpdates.displayTodaysDate(hotel.selectedDate)
  domUpdates.displayRoomsAvailable(control.findRoomsAvailable(hotel.rooms, hotel.bookings, hotel.selectedDate).length);
  domUpdates.displayTodaysRevenue(control.totalRevenueForDate(hotel.rooms, hotel.services, hotel.bookings, hotel.selectedDate));
  domUpdates.displayPercentageOfRoomsOccupied(control.percentageOfRoomsOccupied(hotel.rooms, hotel.bookings, hotel.selectedDate));


  const $navBtn =$('.tab-btn');
  const $dateSubmit = $('#selectedDate')
  const $addGuest = $('#add-guest')
  const tabs = {
    services: () => domUpdates.displayServices(control.servicesByDate(hotel.services, hotel.selectedDate)),
    bookings: () => domUpdates.displayBookings(control.bookingsByDate(hotel.bookings, hotel.selectedDate)),
    guests: () => domUpdates.displayGuests(hotel.guests),
  }
  const guestTabs = {
    services: () => domUpdates.displayServices(control.servicesByID(hotel.services, hotel.selectedCustomer.id)),
    bookings: () => domUpdates.displayBookings(control.bookingsByID(hotel.bookings, hotel.selectedCustomer.id)),
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
    domUpdates.displayRoomsAvailable(control.findRoomsAvailable(hotel.rooms, hotel.bookings, hotel.selectedDate).length);
    domUpdates.displayTodaysRevenue(control.totalRevenueForDate(hotel.rooms, hotel.services, hotel.bookings, hotel.selectedDate));
    domUpdates.displayPercentageOfRoomsOccupied(control.percentageOfRoomsOccupied(hotel.rooms, hotel.bookings, hotel.selectedDate));
  })
  
  $addGuest.click((e)=>{
    domUpdates.displayCustomerForm() 
  })

  $('.guest-search').keyup( (e) => {
    if ($('.guest-search').val() === ""){
      tabs.guests()
    } else {
      domUpdates.displayGuests(control.guestsByName(hotel.guests, $('.guest-search').val()))
    }
  })

  $('.content').click(e => {
    e.preventDefault();
    if (e.target.classList.contains('guest-tab')) {
      hotel.selectedCustomer = control.getGuestByID(hotel.guests, parseInt(e.target.id))
      domUpdates.displaySelectedGuest(hotel.selectedCustomer)
      console.log(hotel)
    } else if (e.target.classList.contains('add-guest')) {
      const name = $('#newGuest').val()
      hotel.addCustomer(name)
      domUpdates.displaySelectedGuest(hotel.selectedCustomer)
    } else if (e.target.classList.contains('remove-guest')) {
      hotel.removeCustomer(parseInt(e.target.id))
      domUpdates.displayGuests(control.guestsByName(hotel.guests, $('.guest-search').val()))
    }
  })

});














