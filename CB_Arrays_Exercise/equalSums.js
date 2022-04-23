function equalSums(givenArray) {
    let isEqual = false;
    for (const [index, element] of givenArray.entries()) {
        let leftSide = givenArray.slice(0, index).reduce((a, b) => a + b, 0)
        let rightSide = givenArray.slice(index + 1, givenArray.length).reduce((a, b) => a + b, 0)
        if (leftSide == rightSide) {
            console.log(index)
            isEqual = true;
            break;
        }
    }
    if (!isEqual) {
        console.log('no')
    }
}


equalSums([1, 2, 3, 3])

equalSums([1, 2])

equalSums([1])

equalSums([1, 2, 3])

equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])