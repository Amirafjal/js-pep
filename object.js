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
console.log(amir.firstName);
console.log(amir.age);
console.log(amir.skills);
amir.sayHi();
console.log(amir.address);
console.log(amir.address.state);