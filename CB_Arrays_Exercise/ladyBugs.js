function ladyBugs(givenArray) {
    const fieldSize = Number(givenArray.shift());
    let field = new Array(fieldSize).fill(0);

    const initialIndices = givenArray.shift().split(' ').map(Number)
    initialIndices.forEach(element => {
        if (element >= 0 && element < fieldSize) {
            field[element] = 1;
        }
    });

    givenArray.forEach(element => {
        let index = Number(element.split(' ')[0])
        let direction = element.split(' ')[1]
        let flyLength = Number(element.split(' ')[2])
        if (index < 0 || index >= fieldSize || field[index] != 1) {
            //pass
        } else {

            if (direction == 'right') {
                field[index] = 0;
                let currentFlyLength = flyLength;

                while (index + currentFlyLength < fieldSize && index + currentFlyLength >= 0) {
                    if (field[index + currentFlyLength] == '0') {
                        field[index + currentFlyLength] = 1;
                        break;
                    } else {
                        currentFlyLength += flyLength;
                    }
                };
            } else if (direction == 'left') {
                field[index] = 0;
                let currentFlyLength = flyLength;

                while (index - currentFlyLength < fieldSize && index - currentFlyLength >= 0) {
                    if (field[index - currentFlyLength] == '0') {
                        field[index - currentFlyLength] = 1;
                        break;
                    } else {
                        currentFlyLength += flyLength;
                    }
                };
            }
        }
    });

    console.log(field.join(' '));
}

ladyBugs([3, '0 1',
    '0 right 1',
    '2 right 1']
)

ladyBugs([3, '0 1 2',
    '0 right 1',
    '1 right 1',
    '2 right 1']
)

ladyBugs([5,
    '3',
    '3 left 2',
    '1 left -2'])