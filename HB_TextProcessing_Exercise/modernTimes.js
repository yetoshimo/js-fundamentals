function modernTimes(givenString) {
    let specialWords = [];

    function checkWord(givenWord) {
        let regex = /^[A-Za-z]+$/;
        if (!givenWord.match(regex)) {
            return false;
        }
        return true;
    }

    for (let word of givenString.split(' ')) {
        if (word.startsWith('#') && word.length > 1 && checkWord(word.substring(1))) {
            specialWords.push(word.substring(1));
        }
    }

    console.log(specialWords.join('\n'));
}


modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia')

modernTimes('The symbol # is known #variously in English-speaking #regions as the #number sign')