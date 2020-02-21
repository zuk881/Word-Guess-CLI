var Letter = require("./letter.js");

function Word(answer) {
    
   this.objArray = [];

    for (var i = 0; i < answer.length; i++) {
        var letter = new Letter(answer[i]);
        this.objArray.push(letter);
    }

    this.displayWord = function (input) {
        let str = "";
        for (var i = 0; i < this.objArray.length; i++) {
         str +=  this.objArray[i].display();
        }
        return str
        
    };

this.makeGuess = function(letter){
    for(var i = 0; i < this.objArray.length; i++){
    this.objArray[i].guess(letter) 
    }
}


}

// var blue = new Word('blue');
// console.log(blue.displayWord());
// blue.makeGuess('l');
// console.log(blue.displayWord())
// console.log(blue.objArray)

module.exports = Word;