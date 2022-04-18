function pyramid(base, increment) {
    let heigth = 0;
    let stone = 0;
    let marble = 0;
    let lapisLazuli = 0;
    let gold = 0;
    for (let i = base; i > 0; i -= 2) {
        heigth += 1;
        let baseAll = i ** 2;
        if (i - 2 <= 0) {
            gold += i ** 2 * increment;
            break;
        }
        if (heigth % 5 == 0) {
            let currentStone = (i - 2) ** 2;
            lapisLazuli += (baseAll - currentStone) * increment;
            stone += currentStone * increment;
        } else {
            let currentStone = (i - 2) ** 2;
            marble += (baseAll - currentStone) * increment;
            stone += currentStone * increment;
        }
    }
    console.log(`Stone required: ${Math.ceil(stone)}`)
    console.log(`Marble required: ${Math.ceil(marble)}`)
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`)
    console.log(`Gold required: ${Math.ceil(gold)}`)
    console.log(`Final pyramid height: ${Math.floor(heigth * increment)}`)
}



pyramid(11, 0.75)