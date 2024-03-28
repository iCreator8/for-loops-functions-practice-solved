
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  // Your code goes here...
  const clientsWithWrongBalance = [];

  for (let i = 0; i < array.length; i++) {
    const bankAccount = array[i];
    let depositSum = 0;
    let withdrawalSum = 0;

    if (bankAccount.deposits && bankAccount.deposits.length > 0) {
      for (let j = 0; j < bankAccount.deposits.length; j++) {
        depositSum += bankAccount.deposits[j];
      }
    }

    if (bankAccount.withdrawals && bankAccount.withdrawals.length > 0) {
      for (let k = 0; k < bankAccount.withdrawals.length; k++) {
        withdrawalSum += bankAccount.withdrawals[k];
      }
    }

    const calculatedBalance = depositSum - withdrawalSum;
    
    if (calculatedBalance !== bankAccount.balance) {
      clientsWithWrongBalance.push(bankAccount);
    }
  }

  return clientsWithWrongBalance;
}

// const clientsWithWrongBalance = getClientsWithWrongBalance(bankAccounts);
// console.log(clientsWithWrongBalance);




// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
