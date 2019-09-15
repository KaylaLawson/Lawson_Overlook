class Room {
  constructor(room) {
    // assign for {bedSize, bidet, costPerNight, numBeds, number, roomType}
    Object.assign( this, room)
  }
}

export default Room;
