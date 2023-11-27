function factorialDivision(num1, num2) {
    // Calculate the factorial of num1
    let factorial1 = 1;
    for (let i = 2; i <= num1; i++) {
      factorial1 *= i;
    }
  
    // Calculate the factorial of num2
    let factorial2 = 1;
    for (let i = 2; i <= num2; i++) {
      factorial2 *= i;
    }
  
    // Divide the first factorial by the second and format the result
    let result = factorial1 / factorial2;
    result = result.toFixed(2);
  
    // Print the result
    console.log(result);
  }
  factorialDivision(5,2)