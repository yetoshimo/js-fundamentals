function pianist(givenArray) {
    let counter = Number(givenArray.shift())

    class Piece {
        constructor(name, composer, key) {
            this.name = name;
            this.composer = composer;
            this.key = key;
        }
    }

    let pieces = {};
    for (let i = 0; i < counter; i++) {
        let [name, composer, key] = givenArray.shift().split('|');
        pieces[name] = new Piece(name, composer, key);
    }

    let nextCommand = givenArray.shift()

    while (nextCommand != 'Stop') {
        let action = nextCommand.split('|');

        switch (action[0]) {
            case 'Add':
                var currentPiece = action[1];
                var currentComposer = action[2];
                var currentKey = action[3];
                if (pieces.hasOwnProperty(currentPiece)) {
                    console.log(`${currentPiece} is already in the collection!`)
                } else {
                    pieces[currentPiece] = new Piece(currentPiece, currentComposer, currentKey);
                    console.log(`${currentPiece} by ${currentComposer} in ${currentKey} added to the collection!`)
                }
                break;
            case 'Remove':
                currentPiece = action[1];
                if (pieces.hasOwnProperty(currentPiece)) {
                    delete pieces[currentPiece];
                    console.log(`Successfully removed ${currentPiece}!`)
                } else {
                    console.log(`Invalid operation! ${currentPiece} does not exist in the collection.`)
                }
                break;
            case 'ChangeKey':
                currentPiece = action[1];
                currentKey = action[2];
                if (pieces.hasOwnProperty(currentPiece)) {
                    pieces[currentPiece].key = currentKey;
                    console.log(`Changed the key of ${currentPiece} to ${currentKey}!`)
                } else {
                    console.log(`Invalid operation! ${currentPiece} does not exist in the collection.`)
                }
                break;
        }

        nextCommand = givenArray.shift();
    }

    Object.values(pieces).forEach(i => {
        console.log(`${i.name} -> Composer: ${i.composer}, Key: ${i.key}`)
    })
}

// pianist([
//     '3',
//     'Fur Elise|Beethoven|A Minor',
//     'Moonlight Sonata|Beethoven|C# Minor',
//     'Clair de Lune|Debussy|C# Minor',
//     'Add|Sonata No.2|Chopin|B Minor',
//     'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
//     'Add|Fur Elise|Beethoven|C# Minor',
//     'Remove|Clair de Lune',
//     'ChangeKey|Moonlight Sonata|C# Major',
//     'Stop'
// ])

pianist([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
]
)