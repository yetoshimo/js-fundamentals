function train(givenArray) {
    let wagons = givenArray.shift().split(' ').map(Number);
    let maxCapacity = Number(givenArray.shift());
    for (let item of givenArray) {
        if (item.includes('Add')) {
            wagons.push(Number(item.split(' ')[1]));
        } else {
            for (let i = 0; i < wagons.length; i++) {
                if (Number(item) + wagons[i] <= maxCapacity) {
                    wagons[i] += Number(item);
                    break;
                }
            }
        }
    }
    console.log(wagons.join(' '))
}

train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75'])

train(['0 0 0 10 2 4',
    '10',
    'Add 10',
    '10',
    '10',
    '10',
    '8',
    '6']
)