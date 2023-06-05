const names = require('./names');
const greet = require('./utils');
const {greeting, number} = require('./alternative-flavor');
require('./mind-grenade');

console.log(names.firstName, names.lastName);

greet('John');

console.log(greeting, number);