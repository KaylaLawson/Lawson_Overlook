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
    services.forEach(service => {
      $('#servicesContent').append(`<p>${service.totalCost}</p>`)
    })
  }, 

  displayBookings(bookings) {
    $('.content-bookings').empty()
    bookings.forEach(booking => {
      $('#bookingsContent').append(`<p>${booking.date}</p>`)
    })
  }

}

export default domUpdates;