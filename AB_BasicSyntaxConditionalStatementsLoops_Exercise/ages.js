function ages(input) {
    let givenAge = Number(input);
    switch (true) {
        case (givenAge >= 66):
            console.log("elder")
            break;
        case (givenAge >= 20):
            console.log("adult")
            break;
        case (givenAge >= 14):
            console.log("teenager")
            break;
        case (givenAge >= 3):
            console.log("child")
            break;
        case (givenAge >= 0):
            console.log("baby")
            break;
        default:
            console.log("out of bounds")
            break;
    }
}

ages(66)

ages(65)

ages(19)

ages(13)

ages(2)

ages(-1)

ages(1)