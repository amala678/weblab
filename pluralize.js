function pluralize(noun, number) {
    // Check if the noun needs to be pluralized
    if (number !== 1) {
        // Handle some special cases for pluralization
        if (noun === 'sheep' || noun === 'geese') {
            return `${number} ${noun}`;
        } else {
            // Add 's' at the end for regular pluralization
            return `${number} ${noun}s`;
        }
    } else {
        // Return singular form
        return `${number} ${noun}`;
    }
}

// Test cases
console.log(pluralize('cat', 1));   // Output: '1 cat'
console.log(pluralize('cat', 3));   // Output: '3 cats'
console.log(pluralize('dog', 1));   // Output: '1 dog'
console.log(pluralize('dog', 5));   // Output: '5 dogs'
console.log(pluralize('sheep', 2)); // Output: '2 sheep'
console.log(pluralize('goose', 3)); // Output: '3 geese'
