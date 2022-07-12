function piccolo(givenArray) {
    let parkingLot = new Map();

    givenArray.forEach(element => {
        let action = element.split(', ')[0];
        let registration = element.split(', ')[1];
        if (action == 'IN') {
            parkingLot.set(registration, 1);
        } else if (parkingLot.has(registration) && action == 'OUT') {
            parkingLot.delete(registration);
        }
    });

    Array.from(parkingLot.entries()).sort((a, b) => a[0].localeCompare(b[0])).map(e => console.log(e[0]))
}

piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
)