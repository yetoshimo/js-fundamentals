function inventory(givenArray) {
    let heroes = {}
    let counter = 1;
    for (let elem of givenArray) {
        let [name, level, item] = elem.split(' / ');
        heroes[counter] = { 'name': name, 'level': Number(level), 'item': item.length > 0 ? item : [] };
        counter++;
    }
    Object.values(heroes).sort((a, b) => a['level'] - b['level']).map(e => console.log(
        `Hero: ${e.name}\nlevel => ${e.level}\nitems => ${e.item}`
    ))
}


// inventory([
//     'Isacc / 25 / Apple, GravityGun',
//     'Derek / 12 / BarrelVest, DestructionSword',
//     'Hes / 1 / Desolator, Sentinel, Antara'
// ]
// )

inventory([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / '
    ]    
)