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