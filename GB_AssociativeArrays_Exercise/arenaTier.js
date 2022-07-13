function arenaTier(givenArray) {
    let gladiators = {};
    let input = givenArray.shift();

    while (input != 'Ave Cesar') {
        if (!input.includes(' vs ')) {
            let [gladiator, technique, skill] = input.split(' -> ');
            if (!gladiators.hasOwnProperty(gladiator)) {
                gladiators[gladiator] = {};
            }
            if (!gladiators[gladiator][technique]) {
                gladiators[gladiator][technique] = Number(skill);
            }
            let oldSkill = gladiators[gladiator][technique];
            if (oldSkill < skill) {
                gladiators[gladiator][technique] = NumbeR(skill);
            }
        } else {
            let [firstGladiator, secondGladiator] = input.split(' vs ');
            if (gladiators.hasOwnProperty(firstGladiator) && gladiators.hasOwnProperty(secondGladiator)) {
                let commonTechnique = Object.keys(gladiators[firstGladiator]).filter(value => Object.keys(gladiators[secondGladiator]).includes(value));
                if (commonTechnique.length > 0) {
                    for (let t of commonTechnique) {
                        if (gladiators[firstGladiator][t] > gladiators[secondGladiator][t]) {
                            delete gladiators[secondGladiator];
                            break;
                        } else {
                            delete gladiators[firstGladiator];
                            break;
                        }
                    }
                }
            }
        }

        input = givenArray.shift();
    }

    let orderedGladiators = {};

    Object.keys(gladiators).sort(function (a, b) {
        if (a != b) {
            let totalA = Object.values(gladiators[a]).reduce((a, b) => a + b, 0);
            let totalB = Object.values(gladiators[b]).reduce((a, b) => a + b, 0);
            return totalB - totalA;
        } else {
            return a.localeCompare(b)
        }
        
    }).forEach(item => {
        orderedGladiators[item] = Object.values(gladiators[item]).reduce((a, b) => a + b, 0);
    })

    for (let [key, value] of Object.entries(orderedGladiators)) {
        console.log(`${key}: ${value} skill`)

        Object.entries(gladiators[key]).sort(function (a, b) {
            return b[1] - a[1] || a[0].localeCompare(b[0])
        }).forEach(item => console.log(`- ${item[0]} <!> ${item[1]}`))
    }
}


arenaTier([
    'Peter -> Duck -> 400',
    // 'Petar -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    // 'Gladius -> Shield -> 350',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
]
)

arenaTier([
    'Peter -> BattleCry -> 400',
    'Alex -> PowerPunch -> 300',
    'Stefan -> Duck -> 200',
    'Stefan -> Tiger -> 250',
    'Ave Cesar'
]
)