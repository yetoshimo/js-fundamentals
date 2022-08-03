function cutAndReverse(givenString) {
    let firstHalf = givenString.slice(0, givenString.length / 2);
    let secondHalf = givenString.slice(givenString.length / 2);
    console.log(firstHalf.split('').reverse().join(''))
    console.log(secondHalf.split('').reverse().join(''))
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')