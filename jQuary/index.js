// let person1 = {};
// console.log(person1);

// let person2 = {
//     name: "bappy",
// };

// function Person3(name) {
//     this.name = name;
// }
// const friend = new Person3("hamim");
// console.log(friend);

// console.log(person2);
// console.log(person2.hasOwnProperty("name"));
// console.log(person1.hasOwnProperty("prototype"));

function Person(first, last, a) {
    this.firstName = first;
    this.lastName = last;
    this.a = a;

    // this.fullName = function() {
    //     console.log(this.firstName + " " + this.lastName);
    // }
}
Person.prototype.fullName = function() {
    console.log(this.firstName + " " + this.lastName);
}

let person1 = new Person("Siful", "Bappy", 24);
let person2 = new Person("Hamim", "Buiha", 25);

console.log(person1);