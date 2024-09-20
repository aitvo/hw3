function getClassStanding(units) {
  if (units >= 0 && units <= 30) {
      return "Freshman";
  } else if (units >= 31 && units <= 60) {
      return "Sophomore";
  } else if (units >= 61 && units <= 90) {
      return "Junior";
  } else if (units > 91) {
      return "Senior";
  } else {
      return "Invalid"; 
  }
}

function askUser() {
  // ask user
  let name = prompt("Please enter your name:");
  let unitsInput = prompt("Please enter the number of units completed:");

  // check if valid
  if (unitsInput === "" || isNaN(unitsInput) || unitsInput.includes('.') || Number.parseInt(unitsInput) < 0) {
      alert(`Sorry, "${unitsInput}" is not a valid number of units.`);
  } else {
      let units = Number.parseInt(unitsInput);
      let standing = getClassStanding(units);
      alert(`Hello ${name}\nYour grade standing is ${standing}`);
  }
}
askUser();
