function worldTour(givenArray) {
    let allStops = givenArray.shift();
    let nextItem = givenArray.shift();
    while (nextItem != 'Travel') {

        let [command, firstPart, secondPart] = nextItem.split(':')
        switch (command) {
            case 'Add Stop':
                firstPart = Number(firstPart)
                if (firstPart >= 0 && firstPart < allStops.length) {
                    let f = allStops.slice(0, firstPart)
                    let s = allStops.slice(firstPart)
                    allStops = f + secondPart + s;
                }
                break;
            case 'Remove Stop':
                firstPart = Number(firstPart)
                secondPart = Number(secondPart)
                if (firstPart >= 0 && firstPart < allStops.length && secondPart >= 0 && secondPart < allStops.length) {
                    let f = allStops.slice(0, firstPart)
                    let s = allStops.slice(secondPart + 1)
                    allStops = f + s
                }
                break;
            case 'Switch':
                allStops = allStops.replace(firstPart, secondPart)
                break;
        }

        console.log(allStops)


        nextItem = givenArray.shift();
    }

    console.log(`Ready for world tour! Planned stops: ${allStops}`)
}


worldTour((["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"])
)