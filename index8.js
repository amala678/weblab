function findLongestWord(words) {
    return Math.max(...words.map(word => word.length));
}

console.log(findLongestWord(["apple", "banana", "kiwi"])); 