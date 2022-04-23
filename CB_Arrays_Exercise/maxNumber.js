function maxNumber(givenArray) {
    let topNumbers = [];
    for (const [index, item] of givenArray.entries()) {
        let isBigger = true;
        for (let idx = index + 1; idx < givenArray.length; idx++) {
            if (item <= givenArray[idx]) {
                isBigger = false;
                break;
            }
        }
        if (isBigger) {
            topNumbers.push(item)
        }
    }
    console.log(topNumbers.join(' '))
}

maxNumber([1, 4, 3, 2])

maxNumber([14, 24, 3, 19, 15, 17])

maxNumber([41, 41, 34, 20])

maxNumber([27, 19, 42, 2, 13, 45, 48])