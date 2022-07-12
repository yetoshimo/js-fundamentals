function oddOccurrences(givenString) {
    let words = givenString.split(' ').map(e => e.toLowerCase());

    let allWordsCount = new Map();

    words.forEach(element => {
        if (!allWordsCount.has(element)) {
            allWordsCount.set(element, 1);
        } else {
            allWordsCount.set(element, allWordsCount.get(element) + 1);
        }
    });

    let oddWords = [];

    allWordsCount.forEach((value, key) => {
        if (value % 2 != 0) {
            oddWords.push(key);
        }
    })
    
    console.log(oddWords.join(' '));
}


oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')