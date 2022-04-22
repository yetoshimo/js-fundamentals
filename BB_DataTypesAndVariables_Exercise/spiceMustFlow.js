function dune(startingYield) {
    let totalGathered = 0
    let dailyYieldDrop = 10
    let minersConsume = 26
    let daysOperated = 0;
    while (startingYield >= 100) {
        daysOperated ++
        totalGathered += startingYield
        totalGathered -= minersConsume
        if (totalGathered < 0) {
            totalGathered = 0;
        }
        startingYield -= dailyYieldDrop
    }
    totalGathered -= minersConsume
    if (totalGathered < 0) {
        totalGathered = 0;
    }
    console.log(daysOperated)
    console.log(totalGathered)
}

dune(111)


dune(450)