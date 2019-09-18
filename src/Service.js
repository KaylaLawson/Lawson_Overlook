class Service {
  constructor(service, id) {
    // assign for {userID, food, date, totalCost, }
    Object.assign(this, service)
    this.id = id
  }

  updateFoodItem(item) {
    this.food = item;
  }
}

export default Service;