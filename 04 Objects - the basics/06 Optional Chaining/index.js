/*

let user = {};

alert(user.address?.street); // undefined
alert(user.address.street); // error

// Side effect of chain operator
let user = null;
let x = 0;

user?.sayHi(x++); // ignores sayHi(x++)

alert(x); // 0, value not incremented

*/

// ?. Other variants
let user1 = {
  admin() {
    alert("I am admin");
  },
};

let user2 = {};

user1.admin?.(); // I am admin
user2.admin?.();
