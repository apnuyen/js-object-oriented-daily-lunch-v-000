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
}

class Delivery {
  constructor(){
    store.deliveries.push(this)

  }
}


class Employer {
  constructor(){
    store.employers.push(this)

  }
}
