
// EXERCISE 5
// Return an array of all bank account holders names
// Array example: bankAccounts in /data/data.js
// getAllClientNames(bankAccounts) => ['Kevin', 'Spenser']

export function getAllClientNames(array) {
  // Your code goes here...
  // Check if the array is empty or not an array
  if (!Array.isArray(array) || array.length === 0) {
    // Handle the case where the input is invalid
    return [];
  }

  const clientNames = [];

  // Use a for loop to iterate through the array and extract names
  for (let i = 0; i < array.length; i++) {
    // Assuming each element of the array is an object with a 'name' property
    if (array[i].hasOwnProperty('name')) {
      clientNames.push(array[i].name);
    }
  }

  return clientNames;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-5"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
