function oddAndEvenSum(givenNumber) {
    let digits = givenNumber.toString().split('')
    let oddNumbers = 0;
    let evenNumbers = 0;
    digits.forEach(element => {
        let currentDigit = Number(element);
        if (currentDigit % 2 == 0) {
            evenNumbers += currentDigit;
        } else {
            oddNumbers += currentDigit;
        }
    });
    console.log(`Odd sum = ${oddNumbers}, Even sum = ${evenNumbers}`)
}


oddAndEvenSum(1000435)

oddAndEvenSum(3495892137259234)