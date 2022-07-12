function partyTime(givenArray) {

    let guestList = givenArray.splice(0, givenArray.indexOf("PARTY"));

    givenArray.splice(0, 1); //remove 'PARTY'

    let vipGuest = [];
    let regular = [];

    for (let guest of guestList) {
        if (guest[0] >= "0" && guest[0] <= "9") {
            vipGuest.push(guest);
        } else {
            regular.push(guest);
        }
    }

    for (let attendee of givenArray) {
        if (vipGuest.includes(attendee)) {
            vipGuest.splice(vipGuest.indexOf(attendee), 1);
        }
        if (regular.includes(attendee)) {
            regular.splice(regular.indexOf(attendee), 1);
        }
    }

    console.log(vipGuest.length + regular.length);
    vipGuest.forEach(e => console.log(e));
    regular.forEach(e => console.log(e));
}

partyTime(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
]
)

// partyTime(['m8rfQBvl',
//     'fc1oZCE0',
//     'UgffRkOn',
//     '7ugX7bm0',
//     '9CQBGUeJ',
//     '2FQZT3uC',
//     'dziNz78I',
//     'mdSGyQCJ',
//     'LjcVpmDL',
//     'fPXNHpm1',
//     'HTTbwRmM',
//     'B5yTkMQi',
//     '8N0FThqG',
//     'xys2FYzn',
//     'MDzcM9ZK',
//     'PARTY',
//     '2FQZT3uC',
//     'dziNz78I',
//     'mdSGyQCJ',
//     'LjcVpmDL',
//     'fPXNHpm1',
//     'HTTbwRmM',
//     'B5yTkMQi',
//     '8N0FThqG',
//     'm8rfQBvl',
//     'fc1oZCE0',
//     'UgffRkOn',
//     '7ugX7bm0',
//     '9CQBGUeJ'
// ]
// )