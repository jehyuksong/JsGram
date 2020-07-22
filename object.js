"use strict!";

const fruit1 = { color: "red" };
const fruit2 = { color: "blue", size: "big" };
const mixed = Object.assign({}, fruit1, fruit2);

console.log(mixed.color);
console.log(mixed.size);
