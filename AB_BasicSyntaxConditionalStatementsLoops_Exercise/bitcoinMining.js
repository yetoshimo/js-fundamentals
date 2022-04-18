function miner(minedDays) {
    const priceList = {"gold": 67.51, "bitcoin": 11949.16}
    let counter = 0;
    let saved = 0;
    let firstBuy = 0;
    let bitcoins = 0;
    minedDays.forEach(element => {
        counter += 1;
        if (counter % 3 == 0) {
            saved += element * 0.7 * priceList['gold']
        } else {
            saved += element * priceList['gold']
        }
        if (saved >= priceList['bitcoin']) {
            while (saved >= priceList['bitcoin']) {
                bitcoins += 1;
                saved -= priceList['bitcoin'];
                if (bitcoins == 1) {
                    firstBuy = counter;
                }
            }
        }
    });
    console.log(`Bought bitcoins: ${bitcoins}`)
    if (bitcoins != 0) {
        console.log(`Day of the first purchased bitcoin: ${firstBuy}`)
    }
    console.log(`Left money: ${saved.toFixed(2)} lv.`)
}


// miner([100, 200, 300])


miner([3124.15, 504.212, 2511.124])