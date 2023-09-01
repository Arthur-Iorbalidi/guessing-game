class GuessingGame {
    constructor() {
        this.minRange = 0;
        this.maxRange = 0;
        this.guessNumber = 0;
    }

    setRange(min, max) {
        this.minRange = min;
        this.maxRange = max;
    }

    guess() {
        this.guessNumber = Math.round((this.minRange + this.maxRange) / 2);
        return this.guessNumber;
    }

    lower() {
        this.maxRange = this.guessNumber;
    }

    greater() {
        this.minRange = this.guessNumber;
    }
}

module.exports = GuessingGame;
