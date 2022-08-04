function netherRealms(givenString) {
    class Demon {
        constructor(name, health, damage) {
            this.name = name;
            this.health = Number(health);
            this.damage = Number(damage);
        }
    }

    let allDemons = {};

    let demons = givenString.split(/\s*,\s*|,\s*/)
    demons.forEach(element => {
        let demonHealthReg = /[^0-9+\-*\/.]/g;
        let healthString = [...element.matchAll(demonHealthReg)]
        let totalHealth = 0;
        healthString.forEach(i => totalHealth += i[0].charCodeAt(0))

        let demonDamageReg = /(\d+\.?\d*)|([\+\-\*\/])/g;
        let damageString = [...element.matchAll(demonDamageReg)]
        let totalDamage = 0;
        let multiplication = 0;
        let division = 0;
        for (let i = 0; i < damageString.length; i++) {
            switch (damageString[i][0]) {
                case '+':
                    i++;
                    totalDamage += Number(damageString[i][0]);
                    break;
                case '-':
                    i++;
                    totalDamage -= Number(damageString[i][0]);
                    break;
                case '*':
                    multiplication++;
                    break;
                case '/':
                    division++;
                    break;
                default:
                    totalDamage += Number(damageString[i][0]);
                    break;
            }
        }
        if (multiplication != 0) {
            totalDamage *= Math.pow(2, multiplication);
        }

        if (division != 0 && totalDamage != 0) {
            totalDamage /= Math.pow(2, division);
        }

        allDemons[element] = new Demon(element, totalHealth, totalDamage)
    });
    Object.entries(allDemons).sort((a, b) => a[0].localeCompare(b[0])).forEach(d => {
        console.log(`${d[1].name} - ${d[1].health} health, ${d[1].damage.toFixed(2)} damage`)
    })
}

// netherRealms('M3ph1st0**,    Azazel')

// netherRealms('Gos/ho')

netherRealms('M3ph-0.5s-0.5t0.0**')