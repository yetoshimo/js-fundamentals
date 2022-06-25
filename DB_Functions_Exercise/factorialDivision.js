function factorialDivision(firstNumber, secondNumber) {
    let f = [];
    function factorial (n) {
        if (n == 0 || n == 1)
          return 1;
        if (f[n] > 0)
          return f[n];
        return f[n] = factorial(n-1) * n;
      }
    
    console.log((factorial(firstNumber) / factorial(secondNumber)).toFixed(2));
}


factorialDivision(5, 2)

factorialDivision(6, 2)