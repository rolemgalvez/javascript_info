/*
// Constructor Function
function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let user = new User("Juan");

alert(user.name); // Juan
alert(user.isAdmin); // false

// Construct for one use 
let user2 = new function() {
    this.name = "Peter";
    this.age = 42;

    // other complex codes
};

// new.target -> to know if new is used when the function is called
function User() {
  alert(new.target);
}

// without new
User(); // undefined

// with new
new User(); // function User() { ... }

// Constructor without using new - not advisable
function User(name) {
  if (!new.target) {
    return new User(name); // adding new
  }

  this.name = name;
}

let john = User("John"); // redirects to user with new operator
alert(john.name); // John

// Constructor with return
function BigUser() {
  this.name = "Ben";

  return { name: "Gwen" }; // return is prioritized if it returns an object
}

alert(new BigUser().name); // Gwen

function smallUser() {
  this.name = "Ben";

  return "Gwen"; // don't care to this because it's not an object
}

alert(new smallUser().name); // Ben

*/
git