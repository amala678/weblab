function fixStart(str) {
    // Get the first character of the string
    const firstChar = str.charAt(0);
    
    // Replace all occurrences of the first character except the first one with '*'
    const replacedString = firstChar + str.slice(1).replaceAll(firstChar, '*');
    
    return replacedString;
}

// Test case
console.log(fixStart('babble')); // Output: 'ba**le'
