function travelTime(givenArray) {

    let destinations = generateDestinations(givenArray)

    function generateDestinations(arr) {
        let obj = {};

        arr.forEach(line => {
            let [countryName, townName, travelCost] = line.split(' > ');

            if (!obj.hasOwnProperty(countryName)) {
                obj[countryName] = {};
            }

            if (!obj[countryName].hasOwnProperty(townName)) {
                obj[countryName][townName] = Number(travelCost);
            }

            let oldPrice = obj[countryName][townName];
            if (oldPrice > Number(travelCost)) {
                obj[countryName][townName] = Number(travelCost);
            }
        });

        return obj;

    }

    let sortedDestionions = Object.keys(destinations).sort((a, b) => a.localeCompare(b))

    sortedDestionions.map(c => console.log(`${c} -> ${townCost(destinations[c])}`))

    function townCost(obj) {
        let result = [];

        for (let key of Object.keys(obj).sort((a, b) => obj[a] - obj[b])) {
            result.push(`${key} -> ${obj[key]}`)
        };

        return result.join(' ');
    }

}

// travelTime([
//     "Bulgaria > Sofia > 500",
//     "Bulgaria > Sopot > 800",
//     "France > Paris > 2000",
//     "Albania > Tirana > 1000",
//     "Bulgaria > Sofia > 200"
// ]
// )

travelTime([
    'Bulgaria > Sofia > 25000',
    'Bulgaria > Sofia > 25000',
    'Kalimdor > Orgrimar > 25000',
    'Albania > Tirana > 25000',
    'Bulgaria > Varna > 25010',
    'Bulgaria > Lukovit > 10'
]
)