let amir = {
    firstName: "amir",
    lastName: "afjal",
    address: {
        city: "bengaluru",
        state: "karnataka",
    },
    age: 22,
    isStudent: true,
    skills: ["html", "css", "bootstrap", "React.js"],
    sayHi: function () {
        console.log("amir says Hii");
    }
};
// console.log(amir.firstName);
// console.log(amir.age);
// console.log(amir.skills);
// amir.sayHi();
// console.log(amir.address);
// console.log(amir.address.state);

// SET/UPDATE
// console.log("amir:", amir);
// amir.age = 23;
// amir.isStudent = false;
// amir.friends = ["my mac", "my iphone", "notes", "pen", "and only me"];
// console.log("--------------------");
// console.log("amir :", amir);

// DELETE
// delete amir.friends
// delete amir.age
// delete amir.address.city
// console.log("amir ", amir);

// to access all the key one by one , we use loop

// for (let key in amir) {
//     console.log(key, " : ", amir[key]);
// }

// another method to GET key

// let propkey = "address";
// console.log(amir[propkey]);

// console.log(amir.age);
// console.log(amir["age"]);
