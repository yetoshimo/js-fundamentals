function angryCat(priceRatings, entryPoint, typeOfItems) {
    let leftSide = 0;
    let rightSide = 0;
    const itemValue = priceRatings[entryPoint];
    switch (typeOfItems) {
        case 'cheap':
            for (let i = 0; i < entryPoint; i++) {
                if (priceRatings[i] < itemValue) {
                    leftSide += priceRatings[i];
                }
            }
            for (let j = entryPoint + 1; j < priceRatings.length; j++) {
                if (priceRatings[j] < itemValue) {
                    rightSide += priceRatings[j];
                }
            }
            break;
        case 'expensive':
            for (let i = 0; i < entryPoint; i++) {
                if (priceRatings[i] >= itemValue) {
                    leftSide += priceRatings[i];
                }
            }
            for (let j = entryPoint + 1; j < priceRatings.length; j++) {
                if (priceRatings[j] >= itemValue) {
                    rightSide += priceRatings[j];
                }
            }
            break;
    }
    if (leftSide == rightSide) {
        console.log(`Left - ${leftSide}`)
    } else if (leftSide > rightSide) {
        console.log(`Left - ${leftSide}`)
    } else {
        console.log(`Right - ${rightSide}`)
    }
}

angryCat([1, 5, 1],
    1,
    "cheap")

angryCat([5, 10, 12, 5, 4, 20],
    3,
    "cheap")

angryCat([-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3],
    7,
    "expensive")
