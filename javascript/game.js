//This class is my first constructor class and it will be responsible for creating the main objects, my cards

class Cards {
    constructor (n, p, s, a, hp) {
        this.name = n;
        this.picture = p;
        this.speed = s;
        this.accelaration = a;
        this.horsePower = hp; 
    }
};
// testCardsClass = new Cards('Mustang', 'mustangPic', 100, 110, 500);
// console.log(testCardsClass);



// //This is my second constructor class and it be responsible for shuffling the cards and distributing them. It will also call the class Cards so it can create the objects.
class Game {
    constructor() {
    this.player1Cards = [];
    this.player2Cards = [];
    this.selectedCards1;
    this.selectedCards2;
    }

    createCards() {
        this.player1Cards.push(new Cards('Mustang', 'mustangPic', 100, 110, 500), new Cards('Uno', 'unoPic', 30, 40, 50), new Cards('Gol Quadrado', 'golQuadradoPic', 50, 60, 80));
        this.player2Cards.push(new Cards('Ferrari', 'ferrariPic', 300, 500, 600), new Cards('Gol Bolinha', 'golBolinhaPic', 20, 70, 90), new Cards('Jeep', 'jeepPic', 200, 250, 300));
    }

    cardSelection () {
        this.selectedCards1 = this.player1Cards[Math.floor(Math.random() * this.player1Cards.length)];
        this.selectedCards2 = this.player2Cards[Math.floor(Math.random() * this.player2Cards.length)];
    }
};

let propertyChoice = new Game();
propertyChoice.createCards();
propertyChoice.cardSelection();

// console.log(propertyChoice.selectedCards1.speed, propertyChoice.selectedCards2.speed);

function actionClick (selectedCards1, selectedCards2) {
    let cardsTotal1 = 0;
    let cardsTotal2 = 0
    if(propertyChoice.selectedCards1.speed || propertyChoice.selectedCards1.accelaration || propertyChoice.selectedCards1.horsePower > 
        propertyChoice.selectedCards1.speed || propertyChoice.selectedCards1.accelaration || propertyChoice.selectedCards1.horsePower) {
        this.player2Cards.pop() && this.player1Cards.push()
    } else {
        this.player1Cards.pop() && this.player2Cards.push()
    }
    return cardsTotal1 = player1Cards.length;
    cardsTotal2 = player2Cards.length
}




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
//

//Proximo passo - Escolher o atributo
//Fazer comparacao
//Quem ganhar recebe a carta de quem perdeu
//