function gladiatorExpenses(lossFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let helmetCost = Math.floor(lossFights / 2) * helmetPrice
    let swordCost = Math.floor(lossFights / 3) * swordPrice
    let shieldCost = Math.floor(lossFights / 6) * shieldPrice
    let armorCost = Math.floor(lossFights / 12) * armorPrice
    let expenses = helmetCost + swordCost + shieldCost + armorCost
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`)
}

gladiatorExpenses(7,
    2,
    3,
    4,
    5
)

gladiatorExpenses(23,
    12.50,
    21.50,
    40,
    200
)