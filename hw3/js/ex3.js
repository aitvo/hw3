function getFollowingDay(day) {
  switch (day) {
      case "sun": return "mon";
      case "mon": return "tue";
      case "tue": return "wed";
      case "wed": return "thu";
      case "thu": return "fri";
      case "fri": return "sat";
      case "sat": return "sun";
      default: return null;
  }
}

function askUserForDay() {
  let dayInput = prompt("Enter a day (first 3 letters):")
  let followingDay = getFollowingDay(dayInput);

  if (followingDay) {
      alert(`You entered: ${dayInput}\nThe following day is: ${followingDay}`);
  } else {
      alert(`"${dayInput}" is not a valid day.`);
  }
}
askUserForDay();
