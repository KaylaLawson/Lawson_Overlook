import $ from 'jquery'; 


const domUpdates = {
  displayTodaysDate(today) {
    const date = new Date(today)
    const allMonths = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'August', 'Sept', 'Oct', 'Nov', 'Dec']
    const displayDate = `${allMonths[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
    $('#currentDate').text(displayDate)
  }, 

  displayRoomsAvailable(roomsAvailable) {
    $('#roomsAvail').text(roomsAvailable)
    
  }, 

  displayTodaysRevenue(totalRev) {
    $('#revenueToday').text(totalRev)
  }, 

  displayPercentageOfRoomsOccupied(occ) {
    // - Percentage of rooms occupied for today's date
    $('#occupancy').text(occ)

  },

  displayServices(services) {
    $('#content').empty()
    services.forEach(service => {
      $('#content').append( `
        <p>Food Order: ${service.food}</p>
        <p>Price: $${service.totalCost}</p>
       `)
    })
  }, 

  displayBookings(bookings) {
    $('#content').empty()
    bookings.forEach(booking => {
      $('#content').append( `
      <section class="bookings-section">
        <p class="bg1">${booking.date}</p>
        <p class="bg2">Room Number: ${booking.roomNumber}</p>
      </section> `)
    })
  },

  displayGuests(guests) {
    $('#content').empty()
    guests.forEach(guest => {
      $('#content').append( `
        <p class="guest-tab" id=${guest.id}>${guest.name}</p>
       `)
    })
  }

}

export default domUpdates;