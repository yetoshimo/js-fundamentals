function passwordGenerator(givenArray) {
    let word = givenArray[0].concat(givenArray[1])
    let encoder = givenArray[2];
    const VOWELS = ['a', 'e', 'i', 'o', 'u']
    let j = 0;

    for (let i = 0; i < word.length; i++) {
        if (VOWELS.includes(word[i])) {
            word = word.substring(0, i) + encoder[j].toUpperCase() + word.substring(i + 1);
            j++;
            if (j == encoder.length) {
                j = 0;
            }
        }
    }

    console.log(`Your generated password is ${word.split('').reverse().join('')}`);

}

passwordGenerator([
    'ilovepizza', 'ihatevegetables',
    'orange'
])

passwordGenerator([
    'easymoneyeazylife', 'atleasttencharacters', 'absolute'
]
)