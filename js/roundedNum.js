// Problem statement: Given a floating-point number and the number of decimal places to round to, write a JavaScript program to round the number to the specified number of decimal places.

// Example: If the input number is 3.14159 and the number of decimal places to round to is 2, the program should output 3.14.
// Example: If the input number is 3.14159 and the number of decimal places to round to is 3, the program should output 3.142.
// Example: If the input number is 3.14159 and the number of decimal places to round to is 4, the program should output 3.1416.

const roundedNum = (num, rdNum) => {
  num = num * 10 ** (rdNum + 1);
  num = num - (num % 1);

  let rem = num % 10;

  if (rem === 0) {
    return num / 10 / 10 ** rdNum;
  } else if (rem < 5) {
    return (num - rem) / 10 / 10 ** rdNum;
  } else {
    return ((num - rem) / 10 + 1) / 10 ** rdNum;
  }
};

console.log(roundedNum(3.14159, 2));
console.log(roundedNum(3.14159, 3));
console.log(roundedNum(3.14159, 4));
