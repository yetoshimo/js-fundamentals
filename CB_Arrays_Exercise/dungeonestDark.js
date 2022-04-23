function dungeon(givenRooms) {
    const MAX_HEALTH = 100
    let health = MAX_HEALTH;
    let coins = 0;
    let room = 0;
    let isDead = false;
    const dungeonAction = givenRooms[0].split('|')
    for (item of dungeonAction) {
        let action = item.split(' ')[0]
        let number = Number(item.split(' ')[1])
        room++;
        switch (action) {
            case 'potion':
                if (health < MAX_HEALTH) {
                    if (health + number >= 100) {
                        healingAmount = MAX_HEALTH - health
                    } else {
                        healingAmount = number;
                    }
                    health += number;
                }
                if (health > MAX_HEALTH) {
                    health = MAX_HEALTH;
                }
                console.log(`You healed for ${healingAmount} hp.`)
                console.log(`Current health: ${health} hp.`)
                break;
            case 'chest':
                console.log(`You found ${number} coins.`)
                coins += number;
                break;
            default:
                if (health > number) {
                    console.log(`You slayed ${action}.`)
                    health -= number;
                } else {
                    console.log(`You died! Killed by ${action}.`)
                    console.log(`Best room: ${room}`)
                    isDead = true;
                }
                break;
        }
        if (isDead) {
            break;
        }
    }
    if (!isDead) {
        console.log("You've made it!")
        console.log(`Coins: ${coins}`)
        console.log(`Health: ${health}`)
    }
}


// dungeon(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])

dungeon(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])