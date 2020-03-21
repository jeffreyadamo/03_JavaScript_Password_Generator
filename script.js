// Write a function that takes user input and creates a password
// based on that input and returns it
var lowercase;
var uppercase;
var numeric;
var specialCharacters;
var password1 = [];

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

  else {
    alert("You've chosen a password that is " + passwordLength + " characters long\nYou may chose between the following chracter types:\nlowercase\nuppercase\nnumeric\nspecial characters");
  }
  console.log(passwordLength);
  characters();
// }

// 	3) WHEN prompted for character types to include in the password THEN I choose lowercase, uppercase, numeric, and/or special characters 

// I can do this with confirms. I'd like to be able to do this all at once though://
function characters() {
  // alert("You may chose between lowercase, uppercase, numeric, and/or special characters");
  lowercase = confirm("would you like to include lowercase letters?");
  uppercase = confirm("would you like to include uppercase letters?");
  numeric = confirm("would you like to include numbers?");
  specialCharacters = confirm("would you like to include special characters?");
  characterTypes = [lowercase, uppercase, numeric, specialCharacters];

  console.log(lowercase);
  console.log(uppercase);
  console.log(numeric);
  console.log(specialCharacters);
  console.log(characterTypes);

  if (lowercase === false && uppercase === false && numeric === false && specialCharacters === false) {
    alert("at least one characterType must be selected");
    characters();

  }
}


// console.log("This is outside the function:" + lowercase);




// Need an alert telling which characterTypes have been chosen

// if (characterTypes) = [true, true, true, true]
//   // [lowercase, uppercase, numeric, specialCharacters]
// if (characterTypes) = [true, true, true, false]
//   // [lowercase, uppercase, numeric, null]
// if (characterTypes) = [true, true, false, false]
//   // [lowercase, uppercase, null, null]
// if (characterTypes) = [true, false, false, false]
//   // [lowercase, null, null, null]
// if (characterTypes) = [true, false, true, false]
//   // [lowercase, uppercase, numeric, specialCharacters]

// alert("you have chosen to include " + "insert characterTypes here");




// Let's get random numbers
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var special = "~!@#$%^&*?";

var selectedCharacter = [];

if (lowercase) {
  for (i = 0; i < lowercaseLetters.length; i++) {
    selectedCharacter.push(lowercaseLetters[i]);
  }
}

if (uppercase) {
  for (i = 0; i < uppercaseLetters.length; i++) {
    selectedCharacter.push(uppercaseLetters[i]);
  }
}

if (numeric) {
  for (i = 0; i < numbers.length; i++) {
    selectedCharacter.push(numbers[i]);
  }
}

if (specialCharacters) {
  for (i = 0; i < special.length; i++) {
    selectedCharacter.push(special[i]);
  }
}

console.log("list of characters" + selectedCharacter);





// This is how to generate a random number
// var num = Math.floor(Math.random() * 10);
// console.log(num);
// console.log(special);



// trying to get the loop to generate a defined amount of characters based on passwordLength, but it does not work, says: passwordLength is not defined

// function randomNumbers() {



  for (var i = 0; i < passwordLength; i++) {
    password1.push(selectedCharacter[Math.floor(Math.random() * passwordLength)]);


    // var num = Math.floor(Math.random() * 10);
    // console.log(num);
  }

console.log(password1.join(""));


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
