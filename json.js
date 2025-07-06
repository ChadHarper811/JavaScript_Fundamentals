// Javascript Object
let employee = {
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
let jsonValue = JSON.stringify(employee);
console.log(jsonValue);
jsonValue = JSON.stringify(employee, null, 2);
console.log(jsonValue);

// Convert Value Back to Object
let newEmployee = JSON.parse(jsonValue);
console.log(newEmployee)

// Writing JSON Directly
let jsonString = `{
"firstName": "Elizabeth",
"lastName": "Jones"
}`;
let obj = JSON.parse(jsonString);
console.log(obj);

// Improperly formatted JSON
let notJSON = "hello!";
let newObj = JSON.parse(notJSON);