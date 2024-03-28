// EXERCISE 13
// Return an array of bank accounts that have a sum of deposits less than 2000 or no deposits at all
// Array example: bankAccounts in /data/data.js
// getAllAccountsWithSumsOfDepositsLess2000(bankAccounts) => [
// Susan's Account Object,
// Morgan's Account Object
// Joshua's Account Object
// Candy's Account Object,
// Phil's Account Object
// ]

export function getAllAccountsWithSumsOfDepositsLess2000(array) {

  const accountsWithSumsLess2000 = [];

  for (let i = 0; i < array.length; i++) {
    const bankAccount = array[i];
    let depositSum = 0;

    if (bankAccount.deposits && bankAccount.deposits.length > 0) {
      for (let j = 0; j < bankAccount.deposits.length; j++) {
        depositSum += bankAccount.deposits[j];
      }
    }

    if (depositSum < 2000 || !bankAccount.deposits) {
      accountsWithSumsLess2000.push(bankAccount);
    }
  }

  return accountsWithSumsLess2000;
}

// const accountsWithSumsLess2000 = getAllAccountsWithSumsOfDepositsLess2000(bankAccounts);
// console.log(accountsWithSumsLess2000);


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
