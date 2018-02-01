let store = {customers: [], meals: [], deliveries: [], employers: []}
let customerId = 0

class Customer {
  constructor(name, employer){
    this.id = ++customerId;
    this.employerId = employerId;
    this.name = name
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
