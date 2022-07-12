function wordsTracker(givenArray) {
    let wordsDict = {};
    givenArray.shift().split(' ').forEach(element => {
        wordsDict[element] = 0;
    });
    
    givenArray.forEach(item => {
        if (wordsDict.hasOwnProperty(item)) {
            wordsDict[item]++;
        }
    })

    Object.entries(wordsDict).sort((a, b) => b[1] - a[1]).map(e => console.log(`${e[0]} - ${e[1]}`))
}

wordsTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]
)