function bombNumbers(numbers, bomb) {
    while (numbers.includes(bomb[0])) {
        let idx = numbers.indexOf(bomb[0]);
        let elementsToRemove = bomb[1] * 2 + 1;
        let startIdx = idx - bomb[1];
        if (startIdx < 0) {
            elementsToRemove += startIdx;
            startIdx = 0;
        }
        numbers.splice(startIdx, elementsToRemove);
    }
    console.log(numbers.reduce((a, b) => a + b, 0));
}

// bombNumbers([1, 2, 2, 4, 2, 2, 2, 9],
//     [4, 2]
// )

// bombNumbers([1, 4, 4, 2, 8, 9, 1],
//     [9, 3]
// )

// bombNumbers([1, 7, 7, 1, 2, 3],
//     [7, 1]
// )

// bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
//     [2, 1]
// )

// bombNumbers([1, 4, 1, 1, 1, 1, 1, 4, 1],
//     [4, 2]
// )