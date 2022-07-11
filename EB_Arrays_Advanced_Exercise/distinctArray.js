function distinctArray(givenArray) {
    let tempArray = [];
    for (let i = 0; i < givenArray.length; i++) {
        if (tempArray.includes(givenArray[i])) {
            continue;
        } else {
            tempArray.push(givenArray[i]);
        }
    }
    console.log(tempArray.join(' '));
}


distinctArray([1, 2, 3, 4])

distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])

distinctArray([20, 8, 12, 13, 4, 4, 8, 5])