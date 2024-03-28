const lexicon = {
    "merry": "god",
    "christmas": "jul",
    "and": "och",
    "happy": "gott",
    "new": "nytt",
    "year": "år"
};

function translateToSwedish(text) {
    return text.split(' ').map(word => lexicon[word] || word).join(' ');
}

console.log(translateToSwedish("merry christmas and happy new year")); 