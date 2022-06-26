function treasureHunt(allItems) {
    let initialLoot = allItems.shift().split('|');

    let index = 0;
    let command = allItems[index];

    while (command != 'Yohoho!') {
        let nextCommand = command.split(' ')

        let action = nextCommand[0];

        switch (action) {
            case 'Loot':
                for (let i = 1; i < nextCommand.length; i++) {
                    if (!initialLoot.includes(nextCommand[i])) {
                        initialLoot.unshift(nextCommand[i]);
                    }
                }
                break;
            case 'Drop':
                var idx = Number(nextCommand[1]);
                if (idx > 0 || idx < initialLoot.length) {
                    let dropItem = initialLoot.splice(idx, 1);
                    initialLoot = initialLoot.concat(dropItem)
                }
                break;
            case 'Steal':
                idx = Number(nextCommand[1]);
                if (idx < initialLoot.length) {
                    console.log(initialLoot.splice(initialLoot.length - idx).join(', '));
                } else {
                    console.log(initialLoot.join(', '));
                    initialLoot = [];
                }
                break;
        }

        index++;
        command = allItems[index];
    }

    if (initialLoot.length > 0) {
        let averageGain = 0;
        initialLoot.forEach(element => {
            averageGain += element.length;
        });
        console.log(`Average treasure gain: ${(averageGain / initialLoot.length).toFixed(2)} pirate credits.`);
    } else {
        console.log('Failed treasure hunt.');
    }
}


treasureHunt(["Gold|Silver|Bronze|Medallion|Cup",
"Loot Wood Gold Coins",
"Loot Silver Pistol",
"Drop 3",
"Steal 3",
"Yohoho!"])


// treasureHunt(["Diamonds|Silver|Shotgun|Gold",
//     "Loot Silver Medals Coal",
//     "Drop -1",
//     "Drop 1",
//     "Steal 6",
//     "Yohoho!"])
