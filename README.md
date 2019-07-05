# TriviaGame
triva Game
Written by: Reginald D. Thorpe
      Date: June 20, 2019
 
 This TriviaGame was created during the 3rd week of the George Washington University Bootcamp.
 This program was written using HTML, JavaScript, and jQuery.
 
 Visit the game at: https://rthorpesr.github.io/TriviaGame/

 
 The purpose of this program:
 
 1.)  Create a trivia form with multiple choice or true/false options (your choice).

2.)   a player will have a limited amount of time to finish the quiz. 

3.)   The game ends when the time runs out. 

4.)   The page will reveal the number of questions that players answer correctly and incorrectly.

5.)   Don't let the player pick more than one answer per question.

6.)   Don't forget to include a countdown timer.

* The main point of the game is to learn how html, JavaScript, and jQuery works together.

The Problem: 
1.) SetInterval - We were to give a set amount of time to complete the game, but if the clock runs down to zero before
all the questions are answers, then the game is to end and let the player know their score.
2.) You had to keep track of the number of questions answered correctly and incorrectly as well as stopping the interval count at zero and resetting it for the next game. One issue was that if you do not stop the Interval count properly, the clock will continue to count, but using negative numbers such as " -29, -28.....).

Solved:
1.) Using Javascript, I wrote a function that stopped and cleared the interval when the clock struck zero. This ensured the counter would always stop at zero and end the game. Also, I set variable for the number of correctly answered questions and a variable for incorrectly answered variables.
2. When the game ends, I display these variables as questions correct and questions incorrect. I also so the player the correct answers for each questions. The correct answers for each question are stored in an array and the array is what the player sees on screen.
