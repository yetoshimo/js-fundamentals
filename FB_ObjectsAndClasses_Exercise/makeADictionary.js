function makeADictionary(givenArray) {
    let dictionaryItems = {};
    for (let item of givenArray) {
        let current = JSON.parse(item);
        for (let [key, value] of Object.entries(current)) {
            dictionaryItems[key] = value;
        }
    }
    for (let [key, value] of Object.entries(dictionaryItems).sort()) {
        console.log(`Term: ${key} => Definition: ${value}`)
    }
}

makeADictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]
)