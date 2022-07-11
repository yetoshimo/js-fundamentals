function storeProvision(firstArray, secondArray) {
    let products = {};
    for (let i = 0; i < firstArray.length; i++) {
        if (i % 2 === 0) {
            products[firstArray[i]] = Number(firstArray[i + 1]);
            i++;
        }
    }
    for (let j = 0; j < secondArray.length; j++) {
        if (j % 2 === 0) {
            if (Object.keys(products).includes(secondArray[j])) {
                products[secondArray[j]] += Number(secondArray[j + 1]);
            } else {
                products[secondArray[j]] = Number(secondArray[j + 1]);

            }
            j++;
        }
    }
    for (let [key , value] of Object.entries(products)) {
        console.log(`${key} -> ${value}`)
    }
}

storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
)