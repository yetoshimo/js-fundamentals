function arrayManipulator(givenArray, commands) {
    let newArray = [];
    for (let command of commands) {

        let [action, index, element] = command.split(' ');

        switch (action) {
            case 'add':
                givenArray.splice(index, 0, +element);
                break;

            case 'addMany':
                let current = 0;
                let remove = command.split(' ');
                for (let i = remove.length - 1; i >= 2; i--) {
                    current = remove[i];
                    givenArray.splice(index, 0, +current);
                }
                break;

            case 'contains':
                console.log(givenArray.indexOf(+index));
                break;

            case 'remove':
                givenArray.splice(index, 1);
                break;

            case 'shift':
                let counter = +index;
                for (let i = 0; i < counter; i++) {
                    let tempElement = givenArray.shift();
                    givenArray.push(tempElement);
                }
                break;
                
            case 'sumPairs':
                let newList = givenArray.reduce(function(total, command, index) {
                    if (index % 2 == 0) {
                        total.push(+givenArray[index] + (+givenArray[index + 1] || 0));
                    }
                    return total;
                }, []);
                givenArray = newList;
                break;
                
            case 'print':
                newArray = givenArray;
                break;
        }
    }
    console.log('[ ' + newArray.join(', ') + ' ]')
}

// arrayManipulator([1, 2, 4, 5, 6, 7],
//     ['add 1 8', 'contains 1', 'contains 3', 'print']
// )

arrayManipulator([1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']
)

// arrayManipulator([2, 2, 4, 2, 4],
//     ["add 1 4", "sumPairs", "print"]
// )

// arrayManipulator([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
//     ["sumPairs", "sumPairs", "addMany 0 -1 -2 -3", "print"]
// )