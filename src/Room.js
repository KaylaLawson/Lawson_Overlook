class Room {
  constructor(room, id) {
    // assign for {bedSize, bidet, costPerNight, numBeds, number, roomType}
    Object.assign( this, room)
    this.id = id
  }
}

export default Room;
