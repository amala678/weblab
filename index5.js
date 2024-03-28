function sum(numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
function multiply(numbers) {
    return numbers.reduce((acc, curr) => acc * curr, 1);
}

console.log(sum([1, 2, 3, 4]));
console.log(multiply([1, 2, 3, 4])); 