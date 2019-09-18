import chai from 'chai';
import Hotel from '../src/Hotel';
import Room from '../src/Room';
import Guest from '../src/Guest';
import Booking from '../src/Booking';
import Service from '../src/Service';
import mockGuests from '../test/testData/mockGuests';
import mockRooms from '../test/testData/mockRooms';
import mockBookings from '../test/testData/mockBookings';
import mockServices from '../test/testData/mockServices';
const expect = chai.expect;


describe.only('Hotel', () => {
  let hotel;
  beforeEach( () => {
    hotel = new Hotel( mockGuests, mockRooms, mockBookings, mockServices)
    hotel.startHotel();
  })

  it('should have default properties', () => {
    const newHotel = new Hotel(mockGuests, mockRooms, mockBookings, mockServices)
    expect(newHotel.guests).to.eql(mockGuests)
    expect(newHotel.rooms).to.eql(mockRooms)
    expect(newHotel.bookings).to.eql(mockBookings)
    expect(newHotel.services).to.eql(mockServices)
  })

  it('should be a function', () => {
    expect(Hotel).to.be.a('function');
  });
  
  it('should be an instance of Hotel', () => {
    expect(hotel).to.be.an.instanceOf(Hotel);
  })

  it('should change the date based todays date and selected date', () => {
    const date = '09/12/2019';
    expect(hotel.selectedDate).to.equal('');
    hotel.changeDate(date)
    expect(hotel.selectedDate).to.equal('09/12/2019');
  })

  it('should assign keys to new instantiations of classes', () => {
    expect(hotel.rooms[0]).to.be.an.instanceOf(Room);
    expect(hotel.guests[0]).to.be.an.instanceOf(Guest);
    expect(hotel.bookings[0]).to.be.an.instanceOf(Booking);
    expect(hotel.services[0]).to.be.an.instanceOf(Service);
  })
});
