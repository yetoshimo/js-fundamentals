function printAndSum(firstNumber, secondNumber) {
    let numbers = [];
    let total = 0;
    for (let i = firstNumber; i <= secondNumber; i++) {
        numbers.push(i);
        total += i;
    }
    console.log(numbers.join(' '));
    console.log(`Sum: ${total}`)
}



printAndSum(5, 10)