// Import Node Filesystem Module (the callback version)
import fs from "node:fs";

fs.readFile('./data.json', 'utf8', (err, data) => {
    if(err) {
        console.log('Error reading the file');
        throw err;
    }
    try {
        const dataObj = JSON.parse(data);
        console.log(dataObj);
        console.log("Complete");
    } catch(err) {
        console.error('Cannot parse JSON from file');
        throw err;
    }
});