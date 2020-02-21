function Letter(value) {
    this.letter = value;
    this.guessed = false;
    
    this.toString = function(y) {
        if (this.letter === y) {
            this.guessed = true;
            return " ";
        } 
        
    }
this.display = function(){
    if(this.guessed === true){
        return this.letter
    }
    else {
        return " _ ";
    }
}

    this.guess = function(guess) {
        console.log(`Guessed letter ${guess}`)
        if (guess === this.letter) {
            this.guessed = true;
            console.log('Match found')
        }
    };

}

module.exports = Letter;