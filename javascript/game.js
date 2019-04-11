class Cards {
    constructor (n,s, a, hp) {
        this.name = n;
        this.speed = s;
        this.accelaration = a;
        this.horsePower = hp; 
    }
};

class Game {
    constructor() {
    this.player1Cards = [];
    this.player2Cards = [];
    this.selectedCards1;
    this.selectedCards2;
    }

    createCards() {
        this.player1Cards.push(new Cards('Mustang', 100, 110, 500), new Cards('Uno', 30, 40, 50), new Cards('Gol Quadrado', 50, 60, 80));
        this.player2Cards.push(new Cards('Ferrari', 300, 500, 600), new Cards('Gol Bolinha', 20, 70, 90), new Cards('Jeep', 200, 250, 300));
    }

    cardSelection () {
        this.selectedCards1 = this.player1Cards[Math.floor(Math.random() * this.player1Cards.length)];
        this.selectedCards2 = this.player2Cards[Math.floor(Math.random() * this.player2Cards.length)];
    }
}

let match = new Game();
match.createCards();
match.cardSelection();

console.log(match.selectedCards1.maxSpeed, match.selectedCards2.maxSpeed);











// document.getElementById("card1Name").innerHTML = '';
// document.getElementById("card1Picture").innerHTML = '';
// document.getElementById("card1Speed").innerHTML = '';
// document.getElementById("card1Acceleration").innerHTML = '';
// document.getElementById("card1HorsePower").innerHTML = '';

// document.getElementById("card2Name").innerHTML = '';
// document.getElementById("card2Picture").innerHTML = '';
// document.getElementById("card2Speed").innerHTML = '';
// document.getElementById("card2Acceleration").innerHTML = '';
// document.getElementById("card2HorsePower").innerHTML = '';

// document.getElementById("yourCards").innerHTML = '';
// document.getElementById("aiCards").innerHTML = '';

