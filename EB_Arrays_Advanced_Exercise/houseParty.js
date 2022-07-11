function houseParty(givenArray) {
    let guestList = [];
    for (let guest of givenArray) {
        let guestName = guest.split(' ')[0];
        if (!guest.includes('not')) {
            if (!guestList.includes(guestName)) {
                guestList.push(guestName);
            } else {
                console.log(`${guestName} is already in the list!`);
            }
        } else {
            if (guestList.includes(guestName)) {
                guestList.splice(guestList.indexOf(guestName), 1);
            } else {
                console.log(`${guestName} is not in the list!`);
            }
        }
    }
    console.log(guestList.join('\n'));
}

houseParty(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!']
)

houseParty(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!']
)