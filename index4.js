function translate(text) {
    const consonants = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ';
    let translated = '';
    for (let i = 0; i < text.length; i++) {
        if (consonants.includes(text[i])) {
            translated += text[i] + 'o' + text[i];
        } else {
            translated += text[i];
        }
    }
    return translated;
}

console.log(translate("this is fun"));