function companyUsers(givenArray) {
    let users = new Map();

    for (let item of givenArray) {
        let company = item.split(' -> ')[0];
        let user = item.split(' -> ')[1];
        if (!users.has(company)) {
            users.set(company, new Set())
        }
        users.get(company).add(user);
    }
    
    let sortedUsers = Array.from(users.entries()).sort((a, b) => a[0].localeCompare(b[0]))
    for (let [key, value] of sortedUsers) {
        console.log(key);
        for (let id of value.values()) {
            console.log(`-- ${id}`)
        }
    }
}

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]
)