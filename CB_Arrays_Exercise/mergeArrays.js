function mergeArrays(firstArray, secondArray) {
    let thirdArray = [];
    for (let [index, element] of firstArray.entries()) {
        if (index % 2 == 0) {
            thirdArray.push(Number(element) + Number(secondArray[index]))
        } else {
            thirdArray.push('' + element + secondArray[index])
        }
    }
    console.log(thirdArray.join(' - '))
}


mergeArrays(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']
)