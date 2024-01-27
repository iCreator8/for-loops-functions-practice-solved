
// EXERCISE 1
// Return an array of numbers in 1..10
// getFirstTenNumbers() => [1, 2, 3, ... , 10]


export function getFirstTenNumbers() {
  // Your code goes here...
  const numberLength = 10;
  const numberSet = [];
  for (let i = 0; i < numberLength; i++) {
    numberSet.push(i + 1);
  }
  return numberSet;
}

// console.log(getFirstTenNumbers());

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-1"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
 
