let store = {customers: [], meals: [], deliveries: [], employers: []}
let customerId = 0

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

}

class Delivery {

}

class Employer {

}
