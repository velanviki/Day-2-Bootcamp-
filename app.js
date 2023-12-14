/* Assignment 1:
Write a JavaScript function that takes a number as a parameter and prints whether it's positive, negative, or zero. */
function checkNumber(number) {
  if (number > 0) {
    console.log("The number is Positive");
  } else if (number < 0) {
    console.log("The number is Negative");
  } else {
    console.log("The number is Zero");
  }
}
checkNumber(-5);

/* Assignment 2:
Write a JavaScript function that takes a positive integer as a parameter and calculates its factorial using a for loop. The factorial of a number N is the product of all positive integers less than or equal to N. */
calculateFactorial = (integer) => {
  if (integer < 0 || !Number.isInteger(integer)) {
    console.log("Provide a positive number");
    return;
  }

  let factorial = 1;
  for (let i = 1; i <= integer; i++) {
    factorial = factorial * i;
  }
  console.log(factorial);
};
calculateFactorial(5);

/* Assignment 3:
Write a JavaScript function that takes two numbers as parameters and returns the larger one. */
findLargest = (a, b) => {
  if (a > b) {
    console.log(a);
  } else {
    console.log(b);
  }
};
findLargest(-15, 10);

/* Assignment 4:
Write a JavaScript function that takes a string as a parameter and determines whether it's a palindrome or not. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward (ignoring spaces, punctuation, and capitalization). */
isPalindrome = (str) => {
  let reversedStr = str.split("").reverse().join("");
  if (str === reversedStr) {
    console.log(str + " is palindrome");
  } else {
    console.log(str + " is not a palindrome");
  }
};
isPalindrome("rotator");

/* Assignment 5:
Write a JavaScript function that takes a positive integer as a parameter and prints all the prime numbers less than or equal to that integer. A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers. */
function printPrimesUpToN(n) {

    function isPrime(num) {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return num > 1;
    }

    // Print prime numbers up to n
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
}
printPrimesUpToN(5);


/* Assignment 6:
Write a JavaScript function that simulates a simple calculator. The function should take two numbers and an operator (+, -, *, or /) as parameters and perform the corresponding operation. */
 calculate = (num1, num2, operator) => {

    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                console.log("Cannot divide by zero.");
                return;
            }
            return num1 / num2;
        default:
            console.log("Invalid operator. Please use +, -, *, or /.");
            return;
    }
}

console.log(calculate(5, 3, '+')); // Output: 8


/* Assignment 7:
Write a JavaScript function that takes a string as a parameter and counts the number of vowels (a, e, i, o, u) in the string. */
function countVowels(str) {

    // Count the number of vowels in the string
    let vowelCount = 0;
    for (let char of str) {
        if ('aeiou'.includes(char)) {
            vowelCount++;
        }
    }
    console.log(`The number of vowels in the string is: ${vowelCount}`);
}

countVowels("Hello, World!"); // Output: The number of vowels in the string is: 3


/* Assignment 8:
Write a JavaScript function that takes a positive integer as a parameter and checks if it's a perfect number. A perfect number is a positive integer that is equal to the sum of its proper divisors, excluding itself. */
function isPerfectNumber(number) {

    let sumDivisors = 0;
    for (let i = 1; i < number; i++) {
        if (number % i === 0) {
            sumDivisors += i;
        }
    }

    return sumDivisors === number;
}

console.log(isPerfectNumber(28)); // Output: true (28 is a perfect number)

/* Assignment 9:
Write a JavaScript function that takes a number as a parameter and prints the Fibonacci series up to that number. The Fibonacci series is a sequence of numbers in which each number is the sum of the two preceding ones. */
function printFibonacciSeries(limit) {

    let fibonacciSeries = [0, 1];

    // Generate Fibonacci series up to the given limit using a for loop
    for (let i = 2; fibonacciSeries[i - 1] + fibonacciSeries[i - 2] <= limit; i++) {
        fibonacciSeries[i] = fibonacciSeries[i - 1] + fibonacciSeries[i - 2];
    }
    console.log("Fibonacci Series up to", limit, ":");
    console.log(fibonacciSeries.join(', '));
}

printFibonacciSeries(50);
// Output: Fibonacci Series up to 50 :
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34


/* Assignment 10:
Write a JavaScript function that takes a positive integer as a parameter and prints its multiplication table up to 10. */
function printMultiplicationTable(number) {

    for (let i = 1; i <= 10; i++) {
        console.log(`${number} * ${i} = ${number * i}`);
    }
}

printMultiplicationTable(8);




