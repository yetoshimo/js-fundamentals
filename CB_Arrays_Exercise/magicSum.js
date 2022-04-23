function magicSum(givenArray, magicNumber) {
    for (const [index, item] of givenArray.entries()) {
        for (let j = index + 1; j < givenArray.length; j++) {
            if (item + givenArray[j] == magicNumber) {
                console.log(item + ' ' + givenArray[j])
            }
        }
    }
}


magicSum([1, 7, 6, 2, 19, 23], 8)

magicSum([14, 20, 60, 13, 7, 19, 8], 27)

magicSum([1, 2, 3, 4, 5, 6], 6)