function mixUp(str1, str2) {
    // Extract first two characters of each string
    const str1FirstTwo = str1.substring(0, 2);
    const str2FirstTwo = str2.substring(0, 2);

    // Concatenate the swapped strings with a space in between
    const mixedString = str2FirstTwo + str1.substring(2) + ' ' + str1FirstTwo + str2.substring(2);
    
    return mixedString;
}

// Test cases
console.log(mixUp('mix', 'pod'));     // Output: 'pox mid'
console.log(mixUp('dog', 'dinner'));  // Output: 'dig donner'
