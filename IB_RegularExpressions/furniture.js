function furniture(givenArrray) {
    //>>{furniture name}<<{price}!{quantity}
    let boughtFurnitures = []
    let totalSpend = 0;
    for (let item of givenArrray) {
        if (item != 'Purchase') {
            let pattern = />>(?<furnitureName>[A-Z]\w+)<<(?<furniturePrice>\d+.?\d*)!(?<furnitureQuantity>\d+)/
            if (pattern.exec(item) !== null) {
                boughtFurnitures.push(item.match(pattern).groups.furnitureName);
                totalSpend += Number(item.match(pattern).groups.furniturePrice) * Number(item.match(pattern).groups.furnitureQuantity);
            }
        }
    }
    console.log('Bought furniture:')
    if (boughtFurnitures.length != 0) {
        console.log(boughtFurnitures.join('\n'));
    }
    console.log(`Total money spend: ${totalSpend.toFixed(2)}`)
}

// furniture(['>>Sofa<<312.23!3',
//     '>>TV<<300!5',
//     '>Invalid<<!5',
//     'Purchase']
// )

// furniture(['>>Laptop<<312.2323!3',
//     '>>TV<<300.21314!5',
//     '>Invalid<<!5',
//     '>>TV<<300.21314!20',
//     '>>Invalid<!5',
//     '>>TV<<30.21314!5',
//     '>>Invalid<<!!5',
//     'Purchase']
// )

furniture(['>Invalid<<!4',
    '>Invalid<<!2',
    '>Invalid<<!5',
    'Purchase']
)