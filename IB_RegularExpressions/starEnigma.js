function starEnigma(givenArray) {
    let numberOfItems = Number(givenArray.shift());

    let pattern = /@(?<planetName>[A-Za-z]+)[^@:!\->]*?:(?<population>\d+)[^@:!\->]*?!(?<attackType>[AD])[!][^@:!\->]*?->(?<soldierCount>\d+)/

    let attackedPlanets = [];
    let destroyedPlanets = [];

    for (let i = 0; i < numberOfItems; i++) {
        let nextPlanet = givenArray[i];
        let decryptKey = nextPlanet.match(/[start]/gi) && nextPlanet.match(/[start]/gi).length
        let currentDecode = '';
        for (let ch of nextPlanet) {
            currentDecode += String.fromCharCode(ch.charCodeAt() - decryptKey);
        }

        let decryptedMsg = pattern.exec(currentDecode);

        if (decryptedMsg) {
            switch (decryptedMsg.groups.attackType) {
                case 'A':
                    attackedPlanets.push(decryptedMsg.groups.planetName);
                    break;
                case 'D':
                    destroyedPlanets.push(decryptedMsg.groups.planetName);
                    break;
            }
        }
    }

    attackedPlanets = attackedPlanets.sort();
    destroyedPlanets = destroyedPlanets.sort();
    console.log(`Attacked planets: ${attackedPlanets.length}`)
    if (attackedPlanets.length > 0) {
        attackedPlanets.forEach(item => {
            console.log(`-> ${item}`)
        })
    }
    console.log(`Destroyed planets: ${destroyedPlanets.length}`)
    if (destroyedPlanets.length > 0) {
        destroyedPlanets.forEach(item => {
            console.log(`-> ${item}`)
        })
    }
}

// starEnigma(['2',
//     'STCDoghudd4=63333$D$0A53333',
//     'EHfsytsnhf?8555&I&2C9555SR']
// )

starEnigma(['3',
    "tt(''DGsvywgerx>6444444444%H%1B9444",
    'GQhrr|A977777(H(TTTT',
    'EHfsytsnhf?8555&I&2C9555SR']
)