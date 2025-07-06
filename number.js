// Rounding number to a integer
let num1 = 5.618345
console.log(`Round: ${Math.round(num1)}`);
console.log(`Cieling: ${Math.ceil(num1)}`);
console.log(`Floor: ${Math.floor(num1)}`);

// fixed
let fixed = num1.toFixed(3);
console.log(`fixed type: ${typeof(fixed)} fixed Value: ${fixed}`);

// Display in Locale-specific format
let num2 = 1_000_000;
console.log(`USA: ${num2.toLocaleString('en-US')}`);
console.log(`Grreece: ${num2.toLocaleString('el-EL')}`);
console.log(`Bangladesh: ${num2.toLocaleString('bg-BG')}`);
console.log(`Punjab: ${num2.toLocaleString('pa-PA')}`);

// Intl Format Curreny
let salary = 100000;
let monthlySalary = salary/12;
console.log(`Monthly Salary: ${monthlySalary.toFixed(2)}`);

let formatter1 = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
console.log(`US Dollars: ${formatter1.format(monthlySalary)}`);

let formatter2 = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' });
console.log(`Euros: ${formatter2.format(monthlySalary)}`);

let formatter3 = new Intl.NumberFormat('ja-JA', {style: 'currency', currency: 'JPY'});
console.log(`Yen: ${formatter3.format(monthlySalary)}`);

let formatter4 = new Intl.NumberFormat('zh-HK', {style: 'currency', currency: 'HKD'});
console.log(`Hong Kong Dollars: ${formatter4.format(monthlySalary)}`);