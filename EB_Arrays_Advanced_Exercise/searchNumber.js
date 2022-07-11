function searchNumber(firstArray, secondArray) {
    firstArray = firstArray.slice(0, secondArray[[0]]);
    firstArray = firstArray.slice(secondArray[1], firstArray.length)
    let counter = 0;
    for (const item of firstArray) {
        if (item == secondArray[2]) {
            counter++;
        }
    }
    console.log(`Number ${secondArray[2]} occurs ${counter} times.`)
}

searchNumber([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
)

searchNumber([7, 1, 5, 8, 2, 7],
    [3, 1, 5]
)