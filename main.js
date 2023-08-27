//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function displayFavoriteFoods(person) {
    for (let key in person) {
        if (Array.isArray(person[key])) {
            console.log(key + ": " + person[key].join(", "));
        } else if (typeof person[key] === 'string') {
            console.log(key + ": " + person[key]);
        } else if (Array.isArray(person[key]) && typeof person[key][0] === 'object') {
            for (let shake of person[key]) {
                for (let shakePlace in shake) {
                    console.log(shakePlace + ": " + shake[shakePlace]);
                }
            }
        }
    }
}

displayFavoriteFoods(person3);

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function Person(name, age) {
    this.name = name;
    this.age = age;

    // Use an arrow to create the printInfo method
    this.printInfo = () => {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    };

    // Create another arrow function for the addAge method that takes a single parameter
    // Adding to the age 
    this.addAge = (years) => {
        this.age += years;
    };
}


// Create two people using the 'new' keyword
const person1 = new Person("Johnny", 18);
const person2 = new Person("Liz", 35);

// Print both of their infos
person1.printInfo();
person2.printInfo();

//Increment one person's age by 3 years
person1.addAge(3);

// Print updated info for incremented person
person1.printInfo();



// =============Exercise #3 ============//
/*
    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

function checkStringLength(inputString) {
    return new Promise((resolve, reject) => {
        if (inputString.length > 10) {
            resolve("Big Word");
        } else{
            reject("Small Number");
        }
    });
}

// Example
const input1 = "hello world";
checkStringLength(input1)
    .then(result =>{
     console.log(result);
    })
    .catch(error => {
        console.log(error);
    });