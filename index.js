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

  }
}

class Meal {

}

class Delivery {

}

class Employer {

}
