// // Problem statement: Given a number n, write a JavaScript program to print a diamond star pattern of 2n - 1 rows.

function diamondPattern(n) {
  for (let i = 0; i < 2 * n - 1; i++) {
    let patternLine = "";
    let flag = false;

    for (let j = 0; j < n * 2 - 1; j++) {
      if (i < n) {
        if (j < n - i - 1 || j > n + i - 1) {
          patternLine += " ";
        } else {
          flag ? (patternLine += " ") : (patternLine += "*");
          flag = !flag;
        }
      } else {
        if (j < i - n + 1 || j > 2 * n - 2 - (i + 1 - n)) {
          patternLine += " ";
        } else {
          flag ? (patternLine += " ") : (patternLine += "*");
          flag = !flag;
        }
      }
    }
    console.log(patternLine);
  }
}

diamondPattern(1);
diamondPattern(2);
diamondPattern(3);
diamondPattern(4);
diamondPattern(5);
diamondPattern(6);
diamondPattern(7);
diamondPattern(8);
diamondPattern(9);
