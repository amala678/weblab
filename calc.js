// Function to square a number
function squareNumber(number) {
    const result = number * number;
    console.log(`The result of squaring the number ${number} is ${result}.`);
    return result;
}

// Function to calculate half of a number
function halfNumber(number) {
    const result = number / 2;
    console.log(`Half of ${number} is ${result}.`);
    return result;
}

// Function to calculate the percentage of one number over another
function percentOf(number1, number2) {
    const percentage = (number1 / number2) * 100;
    console.log(`${number1} is ${percentage}% of ${number2}.`);
    return percentage;
}

// Function to calculate the area of a circle
function areaOfCircle(radius) {
    const area = Math.PI * radius * radius;
    const roundedArea = Math.round(area * 100) / 100; // Round to two decimal places
    console.log(`The area for a circle with radius ${radius} is ${roundedArea}.`);
    return roundedArea;
}

// Function to perform a series of operations on a number
function performOperations(number) {
    const half = halfNumber(number);
    const squaredHalf = squareNumber(half);
    const circleArea = areaOfCircle(squaredHalf);
    const percentage = percentOf(circleArea, squaredHalf);
    return percentage;
}

// Example usage
const number = 10;
performOperations(number);
