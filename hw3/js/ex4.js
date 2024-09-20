let num1 = parseInt(prompt("Enter the first integer:"));
let num2 = parseInt(prompt("Enter the second integer:"));

if (isNaN(num1) || isNaN(num2)) {
    console.log("Invalid input! Please enter valid integers.");
} else {
    console.log(`${num1} + ${num2} = ${num1 + num2}`); 
    console.log(`${num1} - ${num2} = ${num1 - num2}`); 
    console.log(`${num1} * ${num2} = ${num1 * num2}`); 

    if (num2 !== 0) {
        console.log(`${num1} / ${num2} = ${num1 / num2}`);  
        console.log(`${num1} % ${num2} = ${num1 % num2}`);  
    } else {
        console.log("Cannot divide by zero.");
    }
}
