// Creating an object
const Obj = {
    fisrtName: "David",
    lastName: "Tucker"
};

// Creating a Map
const map1 = new Map();
map1.set("firstName", "David");
map1.set("lastName", "Tucker");
console.log(map1);

// Using Non-srting keys
map1.set(new Date().getTime(), "Number Key");
map1.set([], "array key");
map1.set(() => "Hi", "Function key");
console.log(map1);


// Checking the size
console.log(`Map Size: ${map1.size}`);

// Acessing values
console.log(map1.get("lastName"));
console.log(map1.get([]));

// Deleting values
map1.delete("firstName");
console.log(`Map Size: ${map1.size}`);

// Creating a set
const set1 = new Set();
set1.add("David");

// Checking the Set size
console.log(`Set Size: ${set1.size}`);

// Trying to add the "same" value
set1.add("David");
console.log(`Set Size: ${set1.size}`);

// Adding in complex values
const team1 = new Set();
const emp1 = {
    firstname: "David",
    lastName: "Tucker"
};
team1.add(emp1);
console.log(`Team Set size: ${team1.size}`);

// Detecting if a Set has an object
console.log(`Does have employee: ${team1.has(emp1)}`);

// Removing values from a Set
team1.delete(emp1);
console.log(`Team Set size: ${team1.size}`);

// Remove all values
team1.add(emp1);
console.log(`Team Set Size: ${team1.size}`);
team1.clear();
console.log(`Team Set Size: ${team1.size}`);