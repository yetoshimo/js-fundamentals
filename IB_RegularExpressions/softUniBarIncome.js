function barIncome(givenArray) {
    let pattern = /%(?<customer>[A-Z][a-z]+)%[^|$%.]*?<(?<product>\w+)>[^|$%.]*?[|](?<count>\d+)[|][^|$%.]*?(?<price>\d+.?\d+)[$]/;
    let totalIncome = 0;
    givenArray.forEach(element => {
        if (pattern.exec(element) != null) {
            let cost = Number(element.match(pattern).groups.count) * Number(element.match(pattern).groups.price);
            console.log(`${element.match(pattern).groups.customer}: ${element.match(pattern).groups.product} - ${cost.toFixed(2)}`)
            totalIncome += cost;
        }
    });
    console.log(`Total income: ${totalIncome.toFixed(2)}`)
}


// barIncome(['%George%<Croissant>|2|10.3$',
//     '%Peter%<Gum>|1|1.3$',
//     '%Maria%<Cola>|1|2.4$',
//     'end of shift']
// )

barIncome(['%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift']
)