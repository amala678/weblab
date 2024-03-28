function isVowel(character) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    return vowels.includes(character);
}

// Test the function
console.log(isVowel('a')); // Output: true
console.log(isVowel('b')); // Output: false
console.log(isVowel('E')); // Output: true
console.log(isVowel('Z')); // Output: false

