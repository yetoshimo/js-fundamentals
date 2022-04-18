function divison(givenNumber) {
    if (givenNumber % 10 == 0) {
        console.log("The number is divisible by 10");
    } else if (givenNumber % 7 == 0) {
        console.log("The number is divisible by 7");
    } else if (givenNumber % 6 == 0) {
        console.log("The number is divisible by 6");
    } else if (givenNumber % 3 == 0) {
        console.log("The number is divisible by 3");
    } else if (givenNumber % 2 == 0) {
        console.log("The number is divisible by 2");
    } else {
        console.log("Not divisible");
    }
}


divison(30)

divison(15)

divison(12)

divison(1643)