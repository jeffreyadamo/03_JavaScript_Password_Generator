# 03 JavaScript: Password Generator - 3/21/2020

## GIVEN I need a new, secure password.

## WHEN I click the button to generate a password, THEN I am presented with a series of prompts for password criteria:

###	1) WHEN prompted for password criteria THEN I select which criteria to include in the password
        Done! Used a prompt to define passwordLength. Made sure it was a number with "isNaN".
		
###	2) WHEN prompted for the length of the password THEN I choose a length of at least 8 characters and no more than 128 characters
		Done! Used an if statment for "passwordLength" that alerted user if numbers were <8 || >128 characters.
		
###	3) WHEN prompted for character types to include in the password THEN I choose lowercase, uppercase, numeric, and/or special characters
        Done! Would have liked to had a multiple field prompt option, or a "Yes" or "No" option, but I made due with "confirm" statements
		
###	4) WHEN I answer each prompt THEN my input should be validated and at least one character type should be selected 
        Done! Made a special "if" statement using && to join variable types so that if the scenario where user picks all 4 "cancel" options for character types the function will alert you that you need at least one character type and throw you back to the start of the function.
		
###	5) WHEN all prompts are answered THEN a password is generated that matches the selected criteria
		This was the hardest part for me. Writing a "For" loop using variables that were combined using the "push" and "join" functions made for some confusion. 

###	6) WHEN the password is generated THEN the password is either displayed in an alert or written to the page
        Done! Just inserted my final "password1" variable into the premade return. (Line.167)
		
