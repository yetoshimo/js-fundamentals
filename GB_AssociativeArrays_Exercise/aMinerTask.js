function aMinerTask(givenArray) {
    let quantities = new Map();

    for (let i = 0; i < givenArray.length; i++) {
        if (!quantities.has(givenArray[i])) {
            quantities.set(givenArray[i], 0);
        }
        quantities.set(givenArray[i], quantities.get(givenArray[i]) + Number(givenArray[i + 1]));
        i++;
    }

    for (let [key, value] of quantities.entries()) {
        console.log(`${key} -> ${value}`)
    }

}

// aMinerTask([
//     'Gold',
//     '155',
//     'Silver',
//     '10',
//     'Copper',
//     '17'
// ]
// )

aMinerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
]
)