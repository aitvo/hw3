const correctPassword = "secret";
const maxAttempts = 3;

let attempts = 0;

// check the password
function checkPassword() {
    while (attempts < maxAttempts) {
        let userPassword = prompt("Enter your password:");

        // check if correct
        if (userPassword === correctPassword) {
            attempts += 1;
            alert(`You entered the correct password after ${attempts} attempt(s).`);
            return; 
        } else {
            attempts += 1; 
            alert(`Incorrect password. You have ${maxAttempts - attempts} attempt(s) left.`);
        }
    }

    // max attempts
    alert(`Your account is locked! You failed to enter the correct password ${maxAttempts} times.`);
}
checkPassword();
