console.log("==========Exercise #1 ===========");
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

function fav_food(person){
    for(let i = 0; i < Object.keys(person).length; i++){
        console.log(Object.keys(person)[i]);
    };
};
fav_food(person3);


console.log("=========Exercise #2===========");
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
class Person{
    constructor(name, age){
        this.age = age;
        this.name = name;
    };
    // Use an arrow to create the printInfo method
    printInfo=()=> {
        return `Name: ${this.name}\nAge: ${this.age}`
    };

    // Create another arrow function for the addAge method that takes a single parameter
    // Adding to the age 
    addAge=()=>{
        this.age+=1;
    };
};

let person4=new Person("Sebastien Dupont",20);
console.log(person4.printInfo());

person4.addAge();
console.log("Person's information after adding age:");
console.log(person4.printInfo());



console.log("=============Exercise #3 ============");
/*
    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

let isGreaterPromise=new Promise(function(myResolve,myReject){
    let stringToCheck="The String we'd like to check.";

    if (stringToCheck.length>10){
        myResolve("Big word.");
    }else{
        myReject("Small Number.");
    }
});

isGreaterPromise.then(
    function (resolvedValue) {
      console.log(resolvedValue);
      console.log("======Other way to creat the Promise based Function:======");
    },
    function (rejectedReason) {
      console.log(rejectedReason);
    }
  );



  //============================\\

const longWord = (randomString) => {
    return new Promise( (resolve,reject) => {
        if(randomString.length>10){
            resolve("Big word.")
        } else {
            reject("Small word.")
        }
    })
}

// Using a JS Promise
longWord("poop")
//Happy resolver path
.then( (result) => {
    console.log(result)
})
//Sad Reject path
.catch( (error) => {
    console.log(error)
})