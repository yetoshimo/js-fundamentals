function addAndSubtract(givenNumbers) {
    let originalSum = 0;
    givenNumbers.forEach(element => {
        originalSum += element;
    });
    let modifiedNumbers = [];
    for (let [index, item] of givenNumbers.entries()) {
        if (item % 2 == 0) {
            item += index;
        } else {
            item -= index;
        }
        modifiedNumbers.push(item);
    }
    let modifiedSum = 0;
    modifiedNumbers.forEach(element => {
        modifiedSum += element;
    })
    console.log(modifiedNumbers)
    console.log(originalSum)
    console.log(modifiedSum)
}


addAndSubtract([5, 15, 23, 56, 35])

addAndSubtract([-5, 11, 3, 0, 2])