function addAndSubtract(firstNumber, secondNumber, thirdNumber) {
    function sum() {
        return firstNumber + secondNumber;
    }
    function subtract() {
        return sum() - thirdNumber;
    }
    console.log(subtract());
}


addAndSubtract(
    23,
    6,
    10
)

addAndSubtract(1,
    17,
    30
)

addAndSubtract(
    42,
    58,
    100
)