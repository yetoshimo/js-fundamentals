function characters(firstChar, secondChar) {
    const minAscii = 31;
    const maxAscii = 127;
    let firstCode = firstChar.charCodeAt(0);
    let secondCode = secondChar.charCodeAt(0);

    let charArray = []

    for (let i = Math.min(firstCode, secondCode) + 1; i < Math.max(firstCode, secondCode); i++) {
        charArray.push(String.fromCharCode(i));
    }

    console.log(charArray.join(' '));
}


characters('a',
    'd'
)

characters(
    '#',
    ':'
)

characters(
    'C',
    '#'
)
