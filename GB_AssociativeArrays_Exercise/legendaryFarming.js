function legendaryFarming(givenInput) {
    let itemsCount = { 'shards': 0, 'fragments': 0, 'motes': 0 };

    let legends = { 'shards': 'Shadowmourne', 'fragments': 'Valanyr', 'motes': 'Dragonwrath' }

    let requiredValue = 250;

    function getLegendaryItem(currentItemCount, requiredValue) {
        for (let [key, value] of Object.entries(currentItemCount)) {
            if (value >= requiredValue) {
                return key;
            }
        }
    }

    let junkMaterials = {};

    let givenMaterials = givenInput.split(' ');

    for (let i = 1; i < givenMaterials.length; i += 2) {
        let material = givenMaterials[i].toLowerCase();
        let quantity = Number(givenMaterials[i - 1]);
        if (material in itemsCount) {
            itemsCount[material] = itemsCount[material] + quantity;
        } else {
            if (material in junkMaterials) {
                junkMaterials[material] += quantity;
            } else {
                junkMaterials[material] = quantity;
            }
        }
        if (itemsCount['shards'] >= 250 || itemsCount['fragments'] >= 250 || itemsCount['motes'] >= 250) {
            let legendItem = getLegendaryItem(itemsCount, requiredValue);
            itemsCount[legendItem] -= requiredValue;
            console.log(`${legends[legendItem]} obtained!`)
            for (let [key, value] of Object.entries(itemsCount).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))) {
                console.log(`${key}: ${value}`)
            }
            for (let [key, value] of Object.entries(junkMaterials).sort((a, b) => a[0].localeCompare(b[0]))) {
                console.log(`${key}: ${value}`)
            }
            break;
        }
    }
}

legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards')

// legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver')