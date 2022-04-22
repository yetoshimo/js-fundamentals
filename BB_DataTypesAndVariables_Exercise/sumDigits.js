function sumDigits(givenNumber) {
    let totalSum = 0;
    while (givenNumber) {
        totalSum += givenNumber % 10;
        givenNumber = Math.floor(givenNumber / 10);
    }
    console.log(`${totalSum}`)
}

sumDigits(245678)

sumDigits(97561)

sumDigits(543)