function race(givenArray) {
    let participants = {};
    givenArray.shift().split(', ').forEach(element => {
        participants[element] = 0;
    });
    let nameReg = /[A-Za-z]+/g;
    let distanceReg = /[\d+]/g;
    for (let item of givenArray) {
        if (item != 'end of race') {
            let racer = item.match(nameReg).join('');
            if (participants.hasOwnProperty(racer)) {
                let tempTotal = 0;
                item.match(distanceReg).forEach(d => {
                    tempTotal += Number(d);
                })
                participants[racer] += tempTotal;
                tempTotal = 0;
            }
        } else {
            break;
        }
    }
    participants = Object.entries(participants).sort((a, b) => b[1] - a[1]).splice(0, 3);
    console.log(`1st place: ${participants[0][0]}`)
    console.log(`2nd place: ${participants[1][0]}`)
    console.log(`3rd place: ${participants[2][0]}`)
}


// race(['George, Peter, Bill, Tom',
//     'G4e@55or%6g6!68e!!@ ',
//     'R1@!3a$y4456@',
//     'B5@i@#123ll',
//     'G@e54o$r6ge#',
//     '7P%et^#e5346r',
//     'T$o553m&6',
//     'end of race']
// )

race(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
    'Mi*&^%$ch123o!#$%#nne787) ',
    '%$$B(*&&)i89ll)*&) ',
    'R**(on%^&ald992) ',
    'T(*^^%immy77) ',
    'Ma10**$#g0g0g0i0e',
    'end of race']
)