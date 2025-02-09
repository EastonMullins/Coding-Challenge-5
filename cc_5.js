//Task 1 - Object Properties

let customer = {
    name: "John Doe",
    age: 35,
    email: "john.doe@email.com"
}
console.log(`Name: ${customer.name}`);
console.log(`Age: ${customer.age}`);
console.log(`Email: ${customer.email}`);

//Task 2 - Object Methods

let order = {
    orderId: 12345,
    totalAmount: 150,
    status: "Processing",
    displayOrder() {
        console.log("ID: ", this.orderId);
        console.log("Amount: ", this.totalAmount);
        console.log("Status: ", this.status);
    }
}
order.displayOrder();

//Task 3 - Shopping Cart

let cartItems = ["Soda", "Water", "Gatorade"];
cartItems.push("Sweet Tea"); // Added Sweet Tea
cartItems.pop(); //Removed Sweet Tea
cartItems.unshift("Lemonade"); //Added Lemonade
cartItems.shift(); //Removed Lemonade
console.log(cartItems);

//Task 4 - Price Adjustments

let prices = [100, 200, 300];
let discountedPrices = prices.map(price => price * 0.9);
console.log("Discounted Price: ", discountedPrices);

//Task 5 - Product Availability

let inventory = [14, 3, 22, 0, 31];
let availability = inventory.filter((stock) => stock > 0); //Removes inventory with 0 valuie
console.log(availability);

//Task 6 - Revenue Calculation

let sales = [500, 300, 200, 400];
let sum = sales.reduce((total, currentValue) => {
    return total + currentValue;
});
console.log(sum);

//Task 7 - Customer Search
let customers = ["Alice", "Bob", "Charlie", "David"]
let search = customers.find((name) => name == "Charlie");
console.log(search);