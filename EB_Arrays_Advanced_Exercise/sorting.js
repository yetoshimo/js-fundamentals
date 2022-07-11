function sorting(givenArray) {
    givenArray.sort((a, b) => b - a);

    let newArray = [];

    let counter = givenArray.length;

    while (givenArray.length > 0) {
        for (let i = 0; i < counter; i++) {
            if (i % 2 == 0) {
                newArray.push(givenArray.shift());
            } else {
                newArray.push(givenArray.pop());
            }
        }
    }

    console.log(newArray.join(' '));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);

sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);