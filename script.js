// Write a function that takes user input and creates a password
// based on that input and returns it
function generatePassword() {
  /****
   * WRITE YOUR CODE HERE
   */
 
// 
// 1) WHEN prompted for password criteria THEN I select which criteria to include in the password 

//  2) WHEN prompted for the length of the password THEN I choose a length of at least 8 characters and no more than 128 characters:

//   //    Define password length. Once "Generate Password" is clicked, it will run the generatePassword function. We are to prompt the user with how long they want the password to be. It must be at least 8 characters long and less than 128 characters. User can cancel out of the function. Password length is then verified to the user.

   var passwordLength = prompt("How long would you like your password to be? (min 8; max 128)");
    if (passwordLength === null) {
      return;
    }  
    if (passwordLength < 8 || passwordLength > 128) {
          var passwordLength = alert("Improper password length.\nPassword must be between 8 and 128 characters.");
          generatePassword(); 
          return;
      }
     
    else { alert("You've chosen a password that is " + passwordLength + " characters long\nYou may chose between the following chracter types:\nlowercase\nuppercase\nnumeric\nspecial characters");
    }
    console.log(passwordLength);
    characters();

// 	3) WHEN prompted for character types to include in the password THEN I choose lowercase, uppercase, numeric, and/or special characters 

// I can do this with confirms. I'd like to be able to do this all at once though://
    function characters() {
    // alert("You may chose between lowercase, uppercase, numeric, and/or special characters");
    var lowercase = confirm("would you like to include lowercase letters?");
    var uppercase = confirm("would you like to include uppercase letters?");
    var numeric = confirm("would you like to include numbers?");
    var specialCharacters = confirm("would you like to include special characters?");
    var characterTypes = [lowercase, uppercase, numeric, specialCharacters];

    console.log(lowercase);
    console.log(uppercase);
    console.log(numeric);
    console.log(specialCharacters);
    console.log(characterTypes);

      if (lowercase === false && uppercase === false && numeric === false && specialCharacters === false) {
        alert("at least one characterType must be selected");
        characters();
      }


    // Let's get random















  return "sometext";
}

















//////////////////////////////////////////////////////////////
// DO NOT TOUCH THE CODE BELOW
//////////////////////////////////////////////////////////////
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
