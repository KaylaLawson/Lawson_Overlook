/* eslint-disable max-len */
import chai from 'chai';
import Control from '../src/Control';
import mockRooms from '../test/testData/mockRooms';
import mockBookings from '../test/testData/mockBookings';
import mockServices from './testData/mockServices';
import mockGuests from '../test/testData/mockGuests';
const expect = chai.expect;

describe('Control', () => {
  let control;
  beforeEach( () => {
    control = new Control();
  })

  it('should be a function', () => {
    expect(Control).to.be.a('function');
  });

  it('should be an instance of Control', () => {
    expect(control).to.be.an.instanceOf(Control);
  })

  describe('findDate', () => {
    it('should return todays date', () => {
      const today = new Date();
      const dd = String(today.getDate()).padStart(2, '0');
      const mm = String(today.getMonth() + 1).padStart(2, '0')
      const yyyy = today.getFullYear();
      const date = `${yyyy}/${mm}/${dd}`;      
      expect(control.findDate()).to.equal(date);
    })
  })

  describe('findRoomsAvailable', () => {
    it('should find rooms available', () => {
      const date = '2019/09/13';
      const bookings = [ 
        { userID: 1, date: '2019/09/13', roomNumber: 1 },
        { userID: 2, date: '2019/09/20', roomNumber: 2 } 
      ];
      expect(mockRooms.length).to.equal(18)
      const available = control.findRoomsAvailable(mockRooms, bookings, date)
      expect(available.length).to.equal(17);
    })
  })

  describe('totalRevenueForDate', () => {
    it('should return total revenue', () => {
      const serviceCost = mockServices[0].totalCost
      const booking = mockBookings[0]
      const roomCost = mockRooms.find(room => room.number === booking.roomNumber).costPerNight
      const totalCosts = (roomCost + serviceCost).toFixed(2)
      expect(control.totalRevenueForDate([mockRooms[0]], [mockServices[0]], [mockBookings[0]], '2019/09/13')).to.equal(totalCosts)
    })
  })

  describe('percentageOfRoomsOccupied', () => {
    it('should return the percentage of rooms occupied', () => {
      const bookings =  [
        { userID: 1, date: '2019/09/13', roomNumber: 1 }, 
        { userID: 2, date: '2019/09/13', roomNumber: 2 },
        { userID: 3, date: '2019/09/13', roomNumber: 3 } 
      ];
      const percent = Math.floor((bookings.length / mockRooms.length) * 100) + '%'
      expect(control.percentageOfRoomsOccupied(mockRooms, bookings, '2019/09/13')).to.equal(percent);
    })
  })

  describe('servicesByDate', () => {
    it('should return services based on the date selected', () => {
      const date = '2019/09/30'
      const result = mockServices.filter(service => service.date === date);
      expect(control.servicesByDate(mockServices, date)).to.eql(result);
    })
  })

  describe('bookingsByDate', () => {
    it('should return bookings based on the date selected', () => {
      const date = '2019/09/20';
      const result = mockBookings.filter(booking => booking.date === date);
      expect(control.bookingsByDate(mockBookings, date)).to.eql(result);
    })
  })
  
  describe('guestsByName', () => {
    it('should return the guests name when searched', () => {
      const name = 'Hayes Lawson'
      const result = mockGuests.filter(guest => guest.name === name);
      expect(control.guestsByName(mockGuests, name)).to.eql(result);
    })
  })

  describe('getGuestByID', () => {
    it('should return the guest identified by objects id', () => {
      const id = 4;
      const result = mockGuests.find(guest => guest.id === id);
      expect(control.getGuestByID(mockGuests, id)).to.eql(result);
    })
  })

  describe('servicesByID', () => {
    it('should return the services identified by the objects userID', () => {
      const id = 4;
      const result = mockServices.filter(service => service.userID === id);
      expect(control.servicesByID(mockServices, id)).to.eql(result)
    })
  })

  describe('bookingsByID', () => {
    it('should return the booking identified by the objects userID', () =>{
      const id = 6;
      const result = mockBookings.filter(booking => booking.userID === id)
      expect(control.bookingsByID(mockBookings, id)).to.eql(result);
    })
  })
})