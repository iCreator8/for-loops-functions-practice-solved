
// EXERCISE 9
// Return an array of bank accounts with balance over $100
// Array example: bankAccounts in /data/data.js
// getClientsWithBalanceOverOneHundred(array) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithBalanceOverOneHundred(array) {
  // Your code goes here...
  const clientsWithBalanceOver100 = [];

  for (let i = 0; i < array.length; i++) {
    const bankAccount = array[i];
    if (bankAccount.balance > 100) {
      clientsWithBalanceOver100.push(bankAccount);
    }
  }

  return clientsWithBalanceOver100;
}

// const clientsWithBalanceOver100 = getClientsWithBalanceOverOneHundred(bankAccounts);
// console.log(clientsWithBalanceOver100);




// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-9"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
