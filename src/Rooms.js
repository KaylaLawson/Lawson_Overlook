class Rooms {
  constructor() {
    this.roomData = null;
  }

  storeRoomData(newRoomData) {
    console.log('Rooms Class: ', newRoomData);
    this.roomData = newRoomData;
  }
}

export default Rooms;
