function experienceGaining(givenCommand) {

    givenCommand = givenCommand.map(Number);

    let neededExperience = givenCommand.shift();
    let countOfBattles = givenCommand.shift();

    let totalExperience = 0;

    let battleCount = 0;

    for (let battle of givenCommand) {
        battleCount++;
        if (battleCount % 15 == 0) {
            totalExperience += battle * 1.05;
        } else if (battleCount % 5 == 0) {
            totalExperience += battle * 0.9;
        } else if (battleCount % 3 == 0) {
            totalExperience += battle * 1.15;
        } else {
            totalExperience += battle;
        }
        if (totalExperience >= neededExperience) {
            console.log(`Player successfully collected his needed experience for ${battleCount} battles.`);
            break;
        }
    }

    if (totalExperience < neededExperience) {
        console.log(`Player was not able to collect the needed experience, ${(neededExperience - totalExperience).toFixed(2)} more needed.`)
    }
}


experienceGaining([500,
    5,
    50,
    100,
    200,
    100,
    30])

experienceGaining([500,
    5,
    50,
    100,
    200,
    100,
    20])

experienceGaining([400,
    5,
    50,
    100,
    200,
    100,
    20])

