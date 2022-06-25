function perfectNumber(givenNumber) {
    let divisionTotal = 0;
    for (let i = 1; i < givenNumber; i++) {
        if (givenNumber % i == 0) {
            divisionTotal += i;
        }
    }
    if (givenNumber == divisionTotal) {
        console.log('We have a perfect number!');
    } else {
        console.log('It\'s not so perfect.')
    }
}

perfectNumber(6)

perfectNumber(28)

perfectNumber(1236498)