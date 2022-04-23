function maxSequence(givenArray) {
    let tempSequence = [];
    let longestSequence = [];
    for (const [index, item] of givenArray.entries()) {

        for (let i = index + 1; i < givenArray.length; i++) {
            if (item == givenArray[i]) {
                tempSequence = givenArray.slice(index, i + 1)
                continue;
            } else {
                tempSequence = givenArray.slice(index, i)
                break;
            }
        }

        if (longestSequence.length < tempSequence.length) {
            longestSequence = tempSequence;
        }

    }
    console.log(longestSequence.join(' '))
}


maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])

maxSequence([1, 1, 1, 2, 3, 1, 3, 3])

maxSequence([4, 4, 4, 4])

maxSequence([0, 1, 1, 5, 2, 2, 6, 3, 3])