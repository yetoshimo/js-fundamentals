function buildWall(givenArray) {
    givenArray = givenArray.map(Number);
    // 1 foot height per day = 195 cubic yards of concrete
    // all crews work simultaneously
    // 1 cubic yard of concrete = 1900 pesos
    let concrete = [];
    let dailyConcreteUsage = 195;
    let concreteCost = 1900;
    let totalCost = 0;
    givenArray = givenArray.filter(e => e != 30);
    while (givenArray.length > 0) {
        let dailyConcrete = 0;
        for (let i = 0; i < givenArray.length; i++) {
            givenArray[i]++;
            dailyConcrete += dailyConcreteUsage;
        }
        if (givenArray.length > 0) {
            concrete.push(dailyConcrete);
        }
        givenArray = givenArray.filter(e => e != 30);
    }
    console.log(concrete.join(', '));
    for (let c of concrete) {
        totalCost += c * concreteCost;
    }
    console.log(`${totalCost} pesos`)
}


buildWall([30, 21, 25, 28])

// buildWall([17])

// buildWall([17, 22, 17, 19, 17])