import $ from 'jquery'; 


const domUpdates = {

  displayTodaysDate(date) {
   

    $('#currentDate').text(date)
  }, 

  displayRoomsAvailable() {
    // Total Rooms Available for today's date
   
  }, 

  displayTodaysRevenue() {
    // - Total revenue for today's date
  }, 

  displaPercentageOfRoomsOccupied() {
    // - Percentage of rooms occupied for today's date

  }

}

export default domUpdates;