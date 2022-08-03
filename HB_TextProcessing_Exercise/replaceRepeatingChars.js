function replaceRepeating(givenString) {
    let characters = givenString.split('');
    let currentChar = '';
    let filteredText = [];
    for (let i = 0; i < characters.length; i++) {
        if (currentChar != characters[i]) {
            currentChar = characters[i];
            filteredText.push(currentChar);
        }
    }
    console.log(filteredText.join(''))
}

replaceRepeating('aaaaabbbbbcdddeeeedssaa')

replaceRepeating('qqqwerqwecccwd')