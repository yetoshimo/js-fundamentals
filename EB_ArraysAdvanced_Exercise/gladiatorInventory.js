function gladiator(givenArray) {
    let inventory = givenArray.shift().split(' ');

    for (let command of givenArray) {
        let [action, element] = command.split(' ');
        switch (action) {
            case 'Buy':
                if (!inventory.includes(element)) {
                    inventory.push(element);
                }
                break;
            case 'Trash':
                if (inventory.includes(element)) {
                    6
                    inventory.splice(inventory.indexOf(element), 1);
                }
                break;
            case 'Repair':
                if (inventory.includes(element)) {
                    inventory.splice(inventory.indexOf(element), 1);
                    inventory.push(element);
                }
                break;
            case 'Upgrade':
                let upgradeItem = element.split('-')[0]
                let upgradeMaterial = element.split('-')[1]
                if (inventory.includes(upgradeItem)) {
                    inventory.splice(inventory.indexOf(upgradeItem) + 1, 0, `${upgradeItem}:${upgradeMaterial}`);
                }
                break;
        }
    }
    console.log(inventory.join(' '));
}


gladiator(['SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel']
)

gladiator(['SWORD Shield Spear',
    'Trash Bow',
    'Repair Shield',
    'Upgrade Helmet-V']
)