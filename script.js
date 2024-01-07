// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  //all possible characters used
  var availableCharacters = "";
  var lowerCaseString = "abcdefghijklmnopqrstuvwxyz";
  var upperCaseString = lowerCaseString.toUpperCase();
  var specialCharsString = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var numbersString = "1234567890"

  //make sure we select a proper amount of characters
  var numChars = prompt("How long is your desired password? Please enter a number between 8 and 128", 0);
  if (numChars < 8 || numChars > 128 || isNaN(numChars)) {
    alert("Invalid input, please try again")
    return;
  }

  //booleans to figure out what to add to the password
  var lowerAdded = confirm("Would you like to add lower case letters to your password?");
  var upperAdded = confirm("Would you like to add upper case letters to your password?");
  var numAdded = confirm("Would you like to add numbers to your password?")
  var specialAdded = confirm("Would you like to add special characters to your password?")

  //make sure at least one thing is added
  if (!lowerAdded && !upperAdded && !numAdded && !specialAdded) {
    alert("At least one type of character needs to be added to the password, try again");
    return;
  }

  //adding all potential characters to the total pool based on user input
  if(lowerAdded) {
    availableCharacters = availableCharacters.concat(lowerCaseString);
  }

  if (upperAdded) {
    availableCharacters = availableCharacters.concat(upperCaseString);
  }

  if (numAdded) {
    availableCharacters = availableCharacters.concat(numbersString);
  }

  if (specialAdded) {
    availableCharacters =availableCharacters.concat(specialCharsString);
  }

  //making a new array of all characters user wants to randomly draw out of
  var passArray = availableCharacters.split("");
  var passString = "";

  //generating actual password
  for (var i = 0; i < numChars; i++) {
    var random = Math.floor(Math.random() * passArray.length);
    passString = passString.concat(passArray[random]);
  }
  
  return passString;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
