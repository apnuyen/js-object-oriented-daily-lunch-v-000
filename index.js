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

  }

  deliveries(){

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
