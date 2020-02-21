var Word = require("./word.js");
var inquirer = require("inquirer");

var letterArray = "abcdefghijklmnopqrstuvwxyz";
var color = ["blue", "red", "green", "purple", "yellow", "black", "white", "pink"];
var randomIndex = Math.floor(Math.random() * color.length);
var randomWord = color[randomIndex]


var newWord = new Word(randomWord)
// console.log(randomWord)
// console.log(newWord)
// console.log(randomIndex)




function newPrompt() {
    
    inquirer.prompt([
        {
            type: "input",
            message: "Select letter from a to z",
            name: "userinput"
        }
    ]).then(function (input) {
        var x = input.userinput;
        newWord.makeGuess(x)
        console.log(newWord.displayWord()) 
       
        newPrompt();
        
    })
}
 
newPrompt();
















