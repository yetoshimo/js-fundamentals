function revealWords(givenWords, givenTemplate) {
    for (let word of givenWords.split(', ')) {
        givenTemplate = givenTemplate.replace('*'.repeat(word.length), word);
    }
    console.log(givenTemplate);
}


revealWords('great',
    'softuni is ***** place for learning new programming languages'
)

revealWords('great, learning',
    'softuni is ***** place for ******** new programming languages'
)