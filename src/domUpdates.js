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
    $('#revenueToday').text('$' + totalRev)
  }, 

  displayPercentageOfRoomsOccupied(occ) {
    // - Percentage of rooms occupied for today's date
    $('#occupancy').text(occ)

  },

  displayServices(services, control) {
    $('#content').empty()
    services.forEach(service => {
      $('#content').append( ` 
      <section class="service-info">
        <p>Date Ordered: ${service.date}</p>
        <p>Food Order: ${service.food}</p>
        <input class="update-service-input-${service.id}" type="text" placeholder="Change Food"/>
        <button class="update-service-btn" id="${service.id}">Submit Change</button>
        <p>Price: $${service.totalCost}</p>
        </section>
       `)
    })
    if(control) {
      $('#content').append(`
    <p>Total Ever: $${control.totalServicesEver(services)}</p>`)
    }
  }, 

  displayBookings(bookings, rooms) {
    $('#content').empty()
    if (rooms && bookings.length === 0) {
      rooms.forEach(room => {
        $('#content').append( ` 
        <section class="room-info" > 
          <h3>Room Type: ${room.roomType} </h3>
          <p>Bidet: ${room.bidet} </p>
          <p> Bed Size: ${room.bedSize} </p>
          <p> Num of Beds: ${room.numBeds} </p>
          <p> Cost Per Night: ${room.costPerNight} </p>
        </section> `)
      })
    } else {
      bookings.forEach(booking => {
        $('#content').append( `
        <ul id="bookings-ul">
          <li class="bg1">${booking.date}</li>
          <li class="bg2">Room Number: ${booking.roomNumber}</li>
        </ul>
       `)
      })
    }
  },

  displayGuests(guests) {
    $('#content').empty()
    if (guests.length !== 0) {
      guests.forEach(guest => {
        $('#content').append( `
        <ul>
          <li class="guest-tab" id=${guest.id}>${guest.name}</li> 
          <button class="remove-guest" id=${guest.id}>X</button>
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
      <input id="newGuest" type="text" class="new-guest-name" placeholder="Enter New Guest" >
      <button class="add-guest">Add guest</button> 
    </form>
    `)
  }, 

  displaySelectedGuest(guest) {
    $('.selected-guest').empty()
    $('.selected-guest').append(` <p>${guest.name} </p> <button class="guest-btn-remove">X</button> `)
  }

}

export default domUpdates;