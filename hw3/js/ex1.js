function validateInput() {
  let userInput = prompt("Please enter a number between 1 and 100:");

  // empty or not a number?
  if (userInput === "" || isNaN(userInput)) {
      alert(`Sorry, "${userInput}" is not a valid entry.`);
      return;
  }

  // convert to number
  let number = Number.parseInt(userInput);

  // check if it's in valid range
  if (Number.isInteger(number) && number >= 1 && number <= 100) {
      alert(`Thank you! You entered ${number}, a valid number.`);
  } else {
      alert(`Sorry, "${userInput}" is not a valid entry.`);
  }
}

validateInput(); 
