import $ from 'jquery'; 


const domUpdates = {
  displayTodaysDate(todaysDate) {
    $('#currentDate').text(todaysDate)
  }, 

  displayRoomsAvailable(roomsAvailable) {
    // Total Rooms Available for today's date
    $('#roomsAvail').text(roomsAvailable)
  }, 

  displayTodaysRevenue() {
    // - Total revenue for today's date
  }, 

  displaPercentageOfRoomsOccupied() {
    // - Percentage of rooms occupied for today's date

  },

  displayServices(services) {
    $('#content').empty()
    services.forEach(service => {
      $('#content').append(`<p>${service.totalCost}</p>`)
    })
  }, 

  displayBookings(bookings) {
    $('#content').empty()
    bookings.forEach(booking => {
      $('#content').append(`<p>${booking.date}</p>`)
    })
  },

  displayGuests(guests) {
    $('#content').empty()
    guests.forEach(guest => {
      $('#content').append(`<p>${guest.name}</p>`)
    })
  }

}

export default domUpdates;