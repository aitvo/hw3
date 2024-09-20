function isValidTime(hours, minutes, seconds) {
  return (
      hours >= 0 && hours <= 23 &&
      minutes >= 0 && minutes <= 59 &&
      seconds >= 0 && seconds <= 59
  );
}

// Function to display the time in "hms" format
function formatTime(hours, minutes, seconds) {
  return `${hours}h${minutes}m${seconds}s`;
}