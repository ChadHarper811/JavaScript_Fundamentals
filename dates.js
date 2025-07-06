// Create a date
let date1 = new Date("2023-01-23T14:23:02-05:00");
console.log(`Date 1: ${date1}`);

// Display just the calander date
console.log(`Calendar Date: ${date1.toDateString()}`);

// display a locale-specific date string
console.log(`Locale en-US: ${date1.toLocaleDateString('en-US')}`);
console.log(`Locale en-GB: ${date1.toLocaleDateString('en-GB')}`);
console.log(`Locale ja-JP: ${date1.toLocaleDateString('ja-JP')}`);

// Display just the time
console.log(`Date time: ${date1.toTimeString()}`);

// Display locale-specific time string
console.log(`Locale en-US: ${date1.toLocaleTimeString('en-US')}`);
console.log(`Locale en-GB: ${date1.toLocaleTimeString('en-GB')}`);
console.log(`Locale ja-JP: ${date1.toLocaleTimeString('ja-JP')}`);

// Custome date string
let options = {
    dateStyle: "short",
    timeStyle: "short"
};
console.log(`Custome date: ${date1.toLocaleString('en-US', options)}`);
console.log(`Custome Date: ${date1.toLocaleString('ar-KW', options)}`);
