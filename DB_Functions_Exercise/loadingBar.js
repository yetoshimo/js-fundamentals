function loadingBar(givenNumber) {
    if (givenNumber / 10 < 10) {
        console.log(`${givenNumber}% [${'%'.repeat(givenNumber / 10)}${'.'.repeat(10 - givenNumber / 10)}]`);
        console.log('Still loading...')
    } else {
        console.log('100% Complete!');
        console.log(`[${'%'.repeat(givenNumber / 10)}]`)
    }
}

loadingBar(30)

loadingBar(50)

loadingBar(100)