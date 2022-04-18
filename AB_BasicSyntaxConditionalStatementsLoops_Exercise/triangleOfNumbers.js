function triangleOfNumbers(givenNumber) {
    let currentLine = "";
    for (let i = 1; i <= givenNumber; i++) {
        for (let j = 0; j < i; j++) {
            currentLine += i + " ";
        }
        console.log(currentLine);
        currentLine = ""
    }
}


triangleOfNumbers(6)