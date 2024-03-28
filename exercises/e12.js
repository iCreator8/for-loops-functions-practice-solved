
// EXERCISE 12
// Return an array of all deposits greater than 100
// Array example: bankAccounts in /data/data.js
// getAllDepositsGreaterThanOneHundred(bankAccounts) => [3432, 43242.34, 23432]

export function getAllDepositsGreaterThanOneHundred(array) {
  // Your code goes here...
 const depositsGreaterThan100 = [];

  for (let i = 0; i < array.length; i++) {
    const bankAccount = array[i];
    
    if (bankAccount.deposits && bankAccount.deposits.length > 0) {
      for (let j = 0; j < bankAccount.deposits.length; j++) {
        if (bankAccount.deposits[j] > 100) {
          depositsGreaterThan100.push(bankAccount.deposits[j]);
        }
      }
    }
  }

  return depositsGreaterThan100;
}

// const depositsGreaterThan100 = getAllDepositsGreaterThanOneHundred(bankAccounts);
// console.log(depositsGreaterThan100);




// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-12"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
