function lettersChangeNumbers(givenString) {
    let words = givenString.split(/\s+/);

    let total = 0;

    const isLowerCase = (string) => /^[a-z]$/.test(string);

    const isUpperCase = (string) => /^[A-Z]$/.test(string);

    for (let word of words) {
        let result = 0;

        let number = Number(word.substring(1, word.length - 1));

        let firstLetter = word.charAt(0);

        let firstLetterPosition = firstLetter.toLowerCase().charCodeAt(0) - 96;

        let lastLetter = word.charAt(word.length - 1);

        let lastLetterPosition = lastLetter.toLowerCase().charCodeAt(0) - 96;

        if (isUpperCase(firstLetter)) {
            result = number / firstLetterPosition;
            total += result;
        }

        if (isLowerCase(firstLetter)) {
            result = number * firstLetterPosition;
            total += result;
        }

        if (isUpperCase(lastLetter)) {
            total -= lastLetterPosition;
        }

        if (isLowerCase(lastLetter)) {
            total += lastLetterPosition;
        }
        
    }
    console.log(total.toFixed(2));
}

lettersChangeNumbers('A12b s17G')

// lettersChangeNumbers('P34562Z q2576f   H456z')

// lettersChangeNumbers('a1A')