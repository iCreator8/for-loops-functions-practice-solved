// EXERCISE 10
// Return an array of account holders names that contains a given letter
// Array example: bankAccounts in /data/data.js
// getClientsWithLetterInName(bankAccounts, 'e') => ['Kevin', 'Steven', ...]

export function getClientsWithLetterInName(array, letter) {
  // Your code goes here...
 const clientsWithLetterInName = [];

  for (let i = 0; i < array.length; i++) {
    const bankAccount = array[i];
    if (bankAccount.name.toLowerCase().includes(letter.toLowerCase())) {
      clientsWithLetterInName.push(bankAccount.name);
    }
  }

  return clientsWithLetterInName;
}

// const clientsWithLetterE = getClientsWithLetterInName(bankAccounts, 'e');
// console.log(clientsWithLetterE);


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
