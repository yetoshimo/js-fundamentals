function login(givenString) {
    let username = givenString.shift()
    let counter = 0;
    givenString.forEach(element => {
        counter += 1;
        if (username == element.split("").reverse().join("")) {
            console.log(`User ${username} logged in.`)
        } else if (counter != 4) {
            console.log("Incorrect password. Try again.")
        } else {
            console.log(`User ${username} blocked!`)
            return;
        }
    });
}

login(['Acer', 'login', 'go', 'let me in', 'recA'])

login(['momo', 'omom'])

login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny'])