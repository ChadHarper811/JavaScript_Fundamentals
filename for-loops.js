// Array of Data
const names = ["David", "Kim", "Steve", "Katie"];

// Quick Example of for loop
for (let i =0; i < names.length; i++) {
    console.log(`Name: ${names[i]}`);
};

console.log("----------");

// Using a for...of loop
for (let name of names) {
    console.log(`Name: ${name}`);
}

console.log("----------");

// Array of complex objects
import employees from './data.json' with { type: 'json' };

const employee = employees[0];
for (let property in employee) {
    console.log(`${property}: ${employee[property]}`);
}

console.log("----------");

// Bring both approaches together
for (let emp of employees) {
    for (let property in emp) {
        console.log(`${property}: ${emp[property]}`);
    }
    console.log("--");
}