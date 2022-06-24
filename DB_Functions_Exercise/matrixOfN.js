function matrixOfN(matrixSize) {
    function buildTheLine() {
        return new Array(matrixSize).fill(matrixSize);
    }

    for (let i = 0; i < matrixSize; i++) {
        console.log(buildTheLine().join(' '))
    }
}

matrixOfN(3)

matrixOfN(7)

matrixOfN(2)