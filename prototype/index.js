// function Mobile() {
//     name = "Samsung Mobile";
// }
// Mobile.prototype.age = 10;

// const phone = new Mobile();
// console.log(phone.age);
// console.log(phone.name);
// console.log(phone);
// console.log(phone)
// console.log(phone.__proto__.hasOwnProperty())
// console.log(phone.__proto__ == Mobile.prototype);

// function Mobile () {

// }

// document.write(Mobile);


// another channel
// const person1 = {};
// console.log(person1);

// let person2 = {
//     name: "Bappy",
// }

// function Person(n) {
//     this.name = n;
// }

// let person3 = new Person("Hamim");
// console.log(person3)
// console.log(person2);

// prototype use
function Person(first, last, a) {
    this.firstName = first;
    this.lastName = last;
    this.a = a;
}

function Creature() {

}

Creature.prototype.breath = function () {
    console.log("Breathing");
}

Person.prototype.fullName = function() {
    console.log(this.firstName + " " + this.lastName);
}

Person.color = "Black";

Person.prototype.__proto__ = Object.create(Creature.prototype);

const person1 = new Person("Siful", "Bappy", 23);
const person2 = new Person("Hamim", "voiha", 23);
console.log(person1)
// console.log(person2.breath())