function sortArray(givenArray) {
    givenArray.sort(function (a, b) {
        if (!(a.length == b.length)) {
            return a.length - b.length;
        } else {
            return a.toLowerCase().localeCompare(b.toLowerCase());
        }
    });
    console.log(givenArray.join('\n'));
}

sortArray(['alpha', 'beta', 'gamma'])

sortArray(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])