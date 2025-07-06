// Javascript Object
let emplyoee = {
    firstName: "Chad",
    lastName: "Harper",
    birthday: new Date("January 1, 1982"),
    numYearsEmployment: 7,
    department: "engineering",
    title: "CTO",
    isActive: true,
    salary: 100000
};

// convert to JSON String
let jsonValue = JSON.stringify(emplyoee);
console.log(jsonValue);