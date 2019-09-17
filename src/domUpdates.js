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
        <p class="bg1">${booking.date}</p>
        <p class="bg2">Room Number: ${booking.roomNumber}</p>
       `)
    })
  },

  displayGuests(guests) {
    $('#content').empty()
    if (guests.length !== 0) {
      guests.forEach(guest => {
        $('#content').append( `
        <ul>
          <li class="guest-tab" id=${guest.id}>${guest.name}</li> <button class="remove-guest" id=${guest.id}>X</button>
        </ul>
         `)
      })
    } else {
      $('#content').append(` <p>Guest Not Found </p>`)
    }
  },

  displayCustomerForm() {
    $('#content').empty()
    $('#content').append(`
    <form>
      <label for="newGuest" class="new-guest"></label>
      <input id="newGuest" type="text" class="new-guest-name" placeholder="Devin should smile more" >
      <button class="add-guest">Add guest</button> 
    </form>
    `)
  }, 

  displaySelectedGuest(guest) {
    $('.selected-guest').empty()
    $('.selected-guest').append(` <p>${guest.name} </p> `)
  }
}

export default domUpdates;