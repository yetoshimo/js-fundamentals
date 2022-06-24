function palindromeIntegers(givenArray) {
    givenArray.forEach(element => {
        if (element == (element + '').split('').reverse().join('')) {
            console.log('true');
        } else {
            console.log('false');
        }
    });
}

// palindromeIntegers([123,323,421,121])

palindromeIntegers([32,2,232,1010])