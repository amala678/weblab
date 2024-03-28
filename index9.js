function filterLongWords(words, i) {
    return words.filter(word => word.length > i);
}

console.log(filterLongWords(["apple", "banana", "kiwi"], 4));