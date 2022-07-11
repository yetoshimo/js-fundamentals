function catalogue(givenArray) {

    class Product {
        constructor(name, price) {
            this.name = name;
            this.price = Number(price);
            this.group = name[0];
        }
    }

    let items = [];
    for (let item of givenArray) {
        let itemName = item.split(' : ')[0];
        let itemPrice = Number(item.split(' : ')[1]);
        items.push(new Product(itemName, itemPrice));
    }

    items.sort((a, b) => a.group.localeCompare(b.group) || a.name.localeCompare(b.name))

    let groupName = '';

    for (let item of items) {
        if (groupName !== item.group) {
            console.log(item.group);
            groupName = item.group;
        }
        console.log(`  ${item.name}: ${item.price}`)
    }
}


// catalogue([
//     'Appricot : 20.4',
//     'Fridge : 1500',
//     'TV : 1499',
//     'Deodorant : 10',
//     'Boiler : 300',
//     'Apple : 1.25',
//     'Anti-Bug Spray : 15',
//     'T-Shirt : 10'
// ]
// )

catalogue([
    'Omlet : 5.4',
    'Shirt : 15',
    'Cake : 59'
]
)