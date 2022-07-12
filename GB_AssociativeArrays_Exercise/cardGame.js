function cardGame(givenArray) {
    let players = new Map();

    for (let player of givenArray) {
        let currentPlayer = player.split(': ')[0];
        let cards = player.split(': ')[1].split(', ');
        if (!players.has(currentPlayer)) {
            players.set(currentPlayer, new Set(cards))
        } else {
            cards.forEach(element => {
                players.get(currentPlayer).add(element)
            });
        }
    }

    const deck = {
        'J': 11,
        'Q': 12,
        'K': 13,
        'A': 14,
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        '10': 10
    }

    const suit = {
        'S': 4,
        'H': 3,
        'D': 2,
        'C': 1
    }

    let scores = new Map();

    for (let [key, value] of players.entries()) {
        let playerHand = 0;
        value.forEach(e => {
            let cardSuit = e.slice(-1);
            let cardDeck = e.substring(0, e.indexOf(cardSuit));
            playerHand += deck[cardDeck] * suit[cardSuit];
        })
        scores.set(key, playerHand);
    }

    Array.from(scores.entries()).map(e => console.log(`${e[0]}: ${e[1]}`))
}


cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]
)

cardGame([
    'John: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'John: JD, JD, JD, JD'
]
)