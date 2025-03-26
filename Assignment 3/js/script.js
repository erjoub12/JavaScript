// Pizza class
class Pizza {
    constructor(size, crust, sauce, toppings) {
      this.size = size;
      this.crust = crust;
      this.sauce = sauce;
      this.toppings = toppings;
    }
  
    describe() {
      return `You ordered a ${this.size} pizza with ${this.crust} crust, ${this.sauce} sauce, and ${this.toppings.length > 0 ? this.toppings.join(", ") : "no toppings"}.`;
    }
  }
  
  // Handle form
  document.getElementById('pizzaForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const size = document.getElementById('pizzaSize').value;
    const crust = document.getElementById('pizzaCrust').value;
    const sauce = document.getElementById('pizzaSauce').value;
  
    const toppings = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
                          .map(cb => cb.value);
  
    const myPizza = new Pizza(size, crust, sauce, toppings);
  
    // Display pizza description
    document.getElementById('pizzaOutput').textContent = myPizza.describe();
  
    // Show student info when order is clicked
    const studentInfo = document.getElementById('studentInfo');
    studentInfo.textContent = "Student Name: Basil Erjoub | ID: 200556978";
  });
  