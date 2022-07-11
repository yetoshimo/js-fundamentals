function employees(givenArray) {
    let employees = {};
    for (let i of givenArray) {
        employees[i] = i.length;
    }
    for (let key of Object.keys(employees)) {
        console.log(`Name: ${key} -- Personal Number: ${employees[key]}`)
    }
}


employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]
)