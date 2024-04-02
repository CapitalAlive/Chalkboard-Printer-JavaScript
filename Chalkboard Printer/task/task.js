// Welcome to the Chalkboard Printer!
const input = require('sync-input');

let name = input("Enter name:");
let surname = input("Enter surname:");
let message = input("Enter message:");
let repeat = input("Enter number of repeats:")
console.log(`This is ${name} ${surname} and ${message}
`.repeat(Number(repeat)))