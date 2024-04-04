function notBad(str) {
    // Find the indices of 'not' and 'bad'
    const indexNot = str.indexOf('not');
    const indexBad = str.indexOf('bad');

    // Check if 'not' appears before 'bad' and both substrings are found
    if (indexNot !== -1 && indexBad !== -1 && indexNot < indexBad) {
        // Replace the 'not'...'bad' substring with 'good'
        return str.slice(0, indexNot) + 'good' + str.slice(indexBad + 3);
    } else {
        // Otherwise, return the original sentence
        return str;
    }
}

// Test cases
console.log(notBad('This dinner is not that bad!')); // Output: 'This dinner is good!'
console.log(notBad('This movie is not so bad!'));   // Output: 'This movie is good!'
console.log(notBad('This dinner is bad!'));         // Output: 'This dinner is bad!'
