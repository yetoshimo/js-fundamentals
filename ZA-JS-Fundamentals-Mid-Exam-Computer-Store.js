function computerStore(prices) {
    let index = 0;
    let command = prices[index];

    let totalPrice = 0;

    while (command != 'special' && command != 'regular') {
        command = Number(command);
        if (command < 0) {
            console.log('Invalid price!');
        } else {
            totalPrice += command;
        }

        index++;
        command = prices[index];
    }

    if (totalPrice == 0) {
        console.log('Invalid order!');
    } else {
        console.log('Congratulations you\'ve just bought a new computer!');
        console.log(`Price without taxes: ${totalPrice.toFixed(2)}$`);
        console.log(`Taxes: ${(totalPrice * 0.2).toFixed(2)}$`);
        console.log('-----------');
        if (command == 'special') {
            console.log(`Total price: ${((totalPrice * 1.2) * 0.9).toFixed(2)}$`);
        } else {
            console.log(`Total price: ${(totalPrice * 1.2).toFixed(2)}$`);
        }
    }
}

// computerStore([
//     '1050',
//     '200',
//     '450',
//     '2',
//     '18.50',
//     '16.86',
//     'special'
// ])

computerStore([
    '1023',
    '15',
    '-20',
    '-5.50',
    '450',
    '20',
    '17.66',
    '19.30', 'regular'
])
