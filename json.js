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
jsonValue = JSON.stringify(emplyoee, null, 2);
console.log(jsonValue);

// Convert Value Back to Object
let newEmployee = JSON.parse(jsonValue);
console.log(newEmployee)