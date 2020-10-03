/*
// Duplicating an object
let user = { name: "Jose" };

let permission1 = { canView: true };
let permission2 = { canEdit: true };

Object.assign(user, permission1, permission2);
Object.assign(user, { name: "Pedro" }); // overwrite same property

console.log(user);
*/

// Simple cloning
let user1 = {
    name: "Juan",
    age: 43,
}

let clone = Object.assign({}, user1);