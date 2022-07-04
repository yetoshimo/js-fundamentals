function coffeeLover(givenCommand) {
    let allCoffee = givenCommand.shift().split(' ');
    let countOfCommands = givenCommand.shift();

    for (let command of givenCommand) {
        let action = command.split(' ')[0];
        switch (action) {
            case 'Include':
                let newCoffee = command.split(' ')[1];
                allCoffee.push(newCoffee)
                break;
            case 'Remove':
                let removeFrom = command.split(' ')[1];
                let removeAmount = command.split(' ')[2];
                if (removeAmount <= allCoffee.length) {
                    switch (removeFrom) {
                        case 'first':
                            allCoffee.splice(0, removeAmount)
                            break;
                        case 'last':
                            allCoffee.splice(-removeAmount);
                            break;
                    }
                }
                break;
            case 'Prefer':
                let firstIndex = command.split(' ')[1];
                let secondIndex = command.split(' ')[2];
                if (firstIndex >= 0 && secondIndex >= 0 && firstIndex < allCoffee.length && secondIndex < allCoffee.length) {
                    let firstCoffeeName = allCoffee[firstIndex];
                    let secondCoffeeName = allCoffee[secondIndex]
                    allCoffee.splice(firstIndex, 1)
                    allCoffee.splice(firstIndex, 0, secondCoffeeName);
                    allCoffee.splice(secondIndex, 1)
                    allCoffee.splice(secondIndex, 0, firstCoffeeName);
                }
                break;
            case 'Reverse':
                allCoffee.reverse();
                break;
        }
    }

    console.log('Coffees:');
    console.log(allCoffee.join(' '));
}


coffeeLover(["Arabica Liberica Charrieriana Magnistipula Robusta BulkCoffee StrongCoffee",
    "5",
    "Include TurkishCoffee",
    "Remove first 2",
    "Remove last 1",
    "Prefer 3 1",
    "Reverse"])

coffeeLover(["Arabica Robusta BulkCoffee StrongCoffee TurkishCoffee",
    "5",
    "Include OrdinaryCoffee",
    "Remove first 1",
    "Prefer 0 1",
    "Prefer 3 1",
    "Reverse"])

coffeeLover(["Robusta StrongCoffee BulkCoffee TurkishCoffee Arabica",
    "3",
    "Include OrdinaryCoffee",
    "Remove first 1",
    "Prefer 4 1"])
