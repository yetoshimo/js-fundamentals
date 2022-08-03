function subString(givenWord, givenText) {
    let isFound = false;
    for (let word of givenText.toLowerCase().split(' ')) {
        if (word == givenWord.toLowerCase()) {
            console.log(word);
            isFound = true;
            break;
        }
    }
    if (!isFound) {
        console.log(`${givenWord} not found!`);
    }
}

subString('javascript',
    'JavaScript is the best programming language'
)

subString('python',
    'JavaScript is the best programming language'
)