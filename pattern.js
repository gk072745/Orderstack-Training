// // Problem statement: Given a number n, write a JavaScript program to print a diamond star pattern of 2n - 1 rows.

let n = 5;

function diamondPattern(n) {
  for (let i = 0; i < 2 * n - 1; i++) {
    let patternLine = "";
    let flag = false;

    for (let j = 0; j < n * 2 - 1; j++) {
      if (i < n) {
        if (j < n - i - 1 || j > n + i - 1) {
          patternLine += " ";
        } else {
          if (flag) {
            patternLine += " ";
          } else {
            patternLine += "*";
          }
          flag = !flag;
        }
      } else {
        if (j < i - n + 1 || j > 2 * n + 2 - i) {
          patternLine += " ";
        } else {
          if (flag) {
            patternLine += " ";
          } else {
            patternLine += "*";
          }
          flag = !flag;
        }
      }
    }
    console.log(patternLine);
  }
}

diamondPattern(5);
