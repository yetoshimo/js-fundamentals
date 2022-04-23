function arrayRotation(givenArray, givenRotation) {
    for (let i = 0; i < givenRotation; i++) {
        // const firstElement = givenArray.shift()
        givenArray.push(givenArray.shift())
    }
    console.log(givenArray.join(' '))
}

arrayRotation([51, 47, 32, 61, 21], 2)

arrayRotation([32, 21, 61, 1], 4)

arrayRotation([2, 4, 15, 31], 5)