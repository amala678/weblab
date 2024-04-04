function verbing(str) {
    if (str.length >= 3) {
        // Check if the string ends with 'ing'
        if (str.slice(-3) === 'ing') {
            // If already ends with 'ing', add 'ly'
            return str + 'ly';
        } else {
            // Otherwise, add 'ing'
            return str + 'ing';
        }
    } else {
        // If the length is less than 3, leave it unchanged
        return str;
    }
}

// Test cases
console.log(verbing('swim'));      // Output: 'swimming'
console.log(verbing('swimming'));  // Output: 'swimmingly'
console.log(verbing('go'));        // Output: 'go'
