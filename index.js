let store = {customers: [], meals: [], deliveries: [], employers: []}
let customerId = 0
let mealId = 0
let deliveryId = 0
let employerId = 0

class Customer {
  constructor(name, employer){
    this.id = ++customerId;
    if (employer) this.employerId = employerId;
    if (name) this.name = name;
    store.customers.push(this);
  }

  meals(){
    return this.deliveries().map(delivery => {
      return delivery.meal();
    });
  }

  deliveries(){
    return store.deliveries.filter(delivery => {
      return delivery.customerId == this.id;
    })
  }

  totalSpent(){
    return this.meals().reduce(function(sum, meal) {
      return sum+meal.price;
    }, 0);
  }
}

class Meal {
  constructor(title, price){
    this.title = title;
    this.price = price;
    this.id = ++mealId;
    store.meals.push(this)
  }

  deliveries(){
    return store.deliveries.filter(delivery => {
      return delivery.mealId == this.id;
    })
  }

  customers(){
    return this.deliveries().map(delivery => {
      return delivery.customer();
    })
  }

  static byPrice(){
    return store.meals.sort((meal1, meal2) => {
      return meal1.price < meal2.price
    })
  }
}

class Delivery {
  constructor(meal, customer){
    this.id = ++deliveryId;
    this.mealId = mealId;
    this.customerId = customerId;
    store.deliveries.push(this)
  }

  meal(){

  }

  customer(){

  }
}


class Employer {
  constructor(name){
    this.id = ++employerId;
    this.name = name;
    store.employers.push(this)
  }

  employees(){

  }

  deliveries(){

  }

  mealTotals(){

  }
}
