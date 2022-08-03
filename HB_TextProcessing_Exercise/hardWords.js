function hardWords(firstArray) {
    let wordRe = /(_+)/g;
    for (let word of firstArray[0].match(wordRe)) {
        for (let key of firstArray[1]) {
            if (word.length == key.length) {
                firstArray[0] = firstArray[0].replace(word, key);
                break;
            }
        }
    }
    console.log(firstArray[0]);
}

hardWords(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
)