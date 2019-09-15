class Service {
  constructor(service) {
    // assign for {userID, food, date, totalCost, }
    Object.assign(this, service)
  }

  findTotalCost() {
    console.log(this.totalCost)
  }
}

export default Service;