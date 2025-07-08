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
