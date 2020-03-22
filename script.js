// Write a function that takes user input and creates a password
// based on that input and returns it
var lowercase;
var uppercase;
var numeric;
var specialCharacters;
var characterTypes = [];
var password1 = [];
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var special = "~!@#$%^&*?";
var selectedCharacter = [];

function generatePassword() {
  /****
   * WRITE YOUR CODE HERE
   */
  password1 = [];
  selectedCharacter = [];
  characterTypes = [];
  lowercase = false;
  uppercase = false;
  numeric = false;
  specialCharacters = false;
  
  // 
  // 1) WHEN prompted for password criteria THEN I select which criteria to include in the password 

  //  2) WHEN prompted for the length of the password THEN I choose a length of at least 8 characters and no more than 128 characters:

  //   //    Define password length. Once "Generate Password" is clicked, it will run the generatePassword function. We are to prompt the user with how long they want the password to be. It must be at least 8 characters long and less than 128 characters. User can cancel out of the function. Password length is then verified to the user.

  var passwordLength = prompt("How long would you like your password to be? (min 8; max 128)");
    if (isNaN(passwordLength)){
        alert("Password Length must be a number. Try again");
        return;
    }
    if (passwordLength === null) {
      return;
    
    }

    if (passwordLength < 8 || passwordLength > 128) {
      var passwordLength = alert("Improper password length!\n\nPassword must be between 8 and 128 characters");
      generatePassword();
      return;
    }

    // else {
    //   alert("You've chosen a password that is " + passwordLength + " characters long\nYou may chose between the following character types:\nLowercase Letters\nUppercase Letters\nNumbers\nSpecial Characters");
    // }
    else {
      var confirmLength = confirm("You've chosen a password that is " + passwordLength + " characters long\n\nYou may chose between the following character types:\n   Lowercase Letters\n   Uppercase Letters\n   Numbers\n   Special Characters\n\n(Press 'OK to continue or 'cancel' for a different password length)");
      if (confirmLength === false) {
        generatePassword();
      }
    }

  console.log("User input password length: " + passwordLength);
  console.log("-----------");
  
  // 	3) WHEN prompted for character types to include in the password THEN I choose lowercase, uppercase, numeric, and/or special characters 
  // // I can do this with confirms. I'd like to be able to do this all at once though://

  function characters() {
    selectedCharacter = [];
    lowercase = confirm("Would you like to include Lowercase Letters?\n\n(Press 'OK for yes and 'cancel' for no)");
      
      if (lowercase) {
        for (i = 0; i < lowercaseLetters.length; i++) {
          selectedCharacter.push(lowercaseLetters[i]);
        }
        console.log("lowercase letters have been chosen");
        characterTypes.push("Lowercase Letters");
      }

    uppercase = confirm("Would you like to include Uppercase Letters?\n\n(Press 'OK for yes and 'cancel' for no)");
      
      if (uppercase) {
        for (i = 0; i < uppercaseLetters.length; i++) {
          selectedCharacter.push(uppercaseLetters[i]);
          
        }
        console.log("uppercase letters have been chosen");
        characterTypes.push("Uppercase Letters");
      }


    numeric = confirm("Would you like to include Numbers?\n\n(Press 'OK for yes and 'cancel' for no)");
      if (numeric) {
        for (i = 0; i < numbers.length; i++) {
          selectedCharacter.push(numbers[i]);
        }
        console.log("numbers have been chosen");
        characterTypes.push("Numbers");
      }


    specialCharacters = confirm("Would you like to include Special Characters?\n\n(Press 'OK for yes and 'cancel' for no)");
      if (specialCharacters) {
        for (i = 0; i < special.length; i++) {
          selectedCharacter.push(special[i]);
        }
        console.log("special characters have been chosen");
        characterTypes.push("Special Characters");
      }

    console.log("-----------");  
    console.log("characterTypes = " + characterTypes);  

    if (lowercase === false && uppercase === false && numeric === false && specialCharacters === false) {
      alert("At least one character type must be selected!!\n\nPress OK to try again");
      characters();
    }

    console.log("-----------");

    var continue2 = confirm("You have selected the following character types:\n\n" + characterTypes.join("\n") + "\n\nPress OK to continue or cancel to reset choices");

    if (continue2 === false){
      characterTypes = [];
      console.log("Resetting character types");
      console.log(characterTypes);
      characters();
      }


  } //end of function characters

  //Execute the function characters
  characters();

  console.log("selectedCharacter is " + selectedCharacter);
  console.log("passwordLength is " + passwordLength);
  console.log("-------For loop magic/failure-----------")

  // This is how to generate a random number
  // var num = Math.floor(Math.random() * 10);
  // console.log(num);
  // console.log(special);

  selectedCharacter = selectedCharacter.join("");
  console.log("Is selectedCharacter joined? " + selectedCharacter);

  for (var i = 0; i < passwordLength; i++) {
    password1.push(selectedCharacter[Math.floor(Math.random() * selectedCharacter.length)]); 
    
    //This For loop was the hardest thing to get right. The selectedCharacter.length was important bc if larger than the actual array length, it might return empty values.//


    // var num = Math.floor(Math.random() * 10);
    // console.log(num);
  }
  console.log("password1.length is: " + password1.length);
  console.log("password1 is: " + password1);
  console.log("password1.join('') is: " + password1.join(""));



  // Conditions:
  // if (numeric = true) {
  //   randomNumbers();
  // }


  return password1.join("");
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

