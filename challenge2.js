/**
 * greet(name):
 * - receives a name
 * - logs "Hello <name>"
 *
 * e.g.
 * greet("Hamza") logs "Hello Hamza"
 */
function greet(name) {
  // Your code here
  console.log(`Hello ${name}`);
}
/**
 * isOdd(n):
 * - receives a number n
 * - returns true if it's odd, false otherwise
 *
 * e.g.
 * isOdd(7) -> true
 * isOdd(10) -> false
 */
function isOdd(n) {
  // Your code here
  if (n % 2 == 0) {
    console.log("false");
  } else {
    console.log("true");
  }
}
/**
 * oddsSmallerThan(n):
 * - receives a number n
 * - returns the number of ODD numbers smaller than n
 *
 * e.g.
 * oddsSmallerThan(7) -> 3
 * oddsSmallerThan(15) -> 7
 */
function oddsSmallerThan(n) {
  // Your code here
  let totalOdd = [];
  for (let num = 0; num < n; num++) {
      totalOdd.push(num);
  }
  const odds = totalOdd.filter((num) => num % 2 == 1);
  console.log(odds.length);
}

  // let totalOdd = 0;
  // for (let num = 0; num < n && num % 2 == 1; num++) {
  //    totalOdd += num;
  //    console.log(totalOdd);
  // }
  // console.log(totalOdd);
  // };
  
  
 



/**
 * squareOrDouble(n):
 * - receives a number n
 * - returns its square if it's odd
 * - returns its double if it's even
 *
 * e.g.
 * squareOrDouble(16) -> 32
 * squareOrDouble(9) -> 81
 */
function squareOrDouble(n) {
  // Your code here
  if (n % 2 == 0) {
    console.log(n * 2);
  } else {
    console.log(n * n);
  }
}

