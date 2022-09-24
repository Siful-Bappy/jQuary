class Person{
    constructor(first, last) {
        this.first = first;
        this.last = last; 
        // console.log("The person is been created"); 
    }

    sayHigh() {
        console.log("The person has been");
    }

    static hello() {
        console.log("The hello function is been create");
    }
}

let person1 = new Person("Siful", "Bappy");
Person.hello();
console.log(person1); 