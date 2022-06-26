function numbers(givenNumbers) {
    let allNumbers = givenNumbers.split(' ').map(Number);

    const average = allNumbers.reduce((a, b) => a + b, 0) / allNumbers.length;

    let aboveAverage = allNumbers.filter(e => e > average).sort((a, b) => b - a).slice(0, 5);

    if (aboveAverage.length > 0) {
        console.log(aboveAverage.join(' '));
    } else {
        console.log('No');
    }
}

numbers('10 20 30 40 50')

numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51')

numbers('1')

numbers('-1 -2 -3 -4 -5 -6')

numbers('2 -1')

numbers('1 1 1 1 1')