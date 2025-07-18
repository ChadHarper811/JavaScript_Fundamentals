// Array of complex objects
import employees from './data.json' with { type: 'json' };

// Listing only the first five items
for (let i = 0; i < employees.length; i++) {
    if(i === 5) {
        break;
    }
    console.log(`Name: ${employees[i].firstName} ${employees[i].lastName}`);
};

console.log("----------");

// Searching only for first names that start with "B"
for ( let employee of employees) {
    if(!employee.firstName.startsWith('B')) {
        continue;
    }
    console.log(`Name: ${employee.firstName} ${employee.lastName}`);
};

console.log("----------");

// Nested loop control flow
employee: for (let emp of employees) {
    for (let property in emp) {
        if(property === "dateBirth") {
            continue employee;
        }
        console.log(`${property}: ${emp[property]}`);
    }
    console.log("--");
};
