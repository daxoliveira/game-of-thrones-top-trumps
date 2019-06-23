// Class constructor will be responsible for creating the main objects, game cards

class Card {
  constructor(name, picture, likeability, screenTime, numberOfKills) {
    this.name = name;
    this.picture = picture;
    this.likeability = likeability;
    this.screenTime = screenTime;
    this.numberOfKills = numberOfKills;
  }
}

const daenerysTargaryen = new Card('Daenerys Targaryen', '1daenerysTargaryen', 100, 100, 100);
const jonSnow = new Card('Jon Snow', '2jonSnow', 99, 99, 99);
const tyrionLannister = new Card('Tyrion Lannister', '3tyrionLannister', 98, 98, 98);
const sansaStark = new Card('Sansa Stark', '4sansaStark', 97, 97, 97);
const cerseiLannister = new Card('Cersei Lannister', '5cerseiLannister', 96, 96, 96);
const joffreyBaratheon = new Card('Joffrey Baratheon', '6joffreyBaratheon', 95, 95, 95);
const eddardStark = new Card('Eddard Stark', '7eddardStark', 94, 94, 94);
const aryaStark = new Card('Arya Stark', '8aryaStark', 93, 93, 93);
const brienneOfTarth = new Card('Brienne of Tarth', '9brienneOfTarth', 92, 92, 92);
const ramsayBolton = new Card('Ramsay Bolton', '10ramsayBolton', 91, 91, 91);

const sharedDeck = [];

sharedDeck.push(daenerysTargaryen, jonSnow, tyrionLannister, sansaStark, cerseiLannister, joffreyBaratheon, eddardStark, aryaStark, brienneOfTarth, ramsayBolton);

class Game {
  constructor() {
    this.shuffledCards = this.pickCardsRandomly(sharedDeck);
    this.player = this.shuffledCards[0];
    this.computer = this.shuffledCards[1];
  }

  pickCardsRandomly(deck) {
    let cardsPlayer = [];
    let cardsComputer = [];
    
    let count = 0;
    while (count < 10) {
      let randomCard = Math.floor(Math.random() * deck.length)
      if (cardsPlayer.length > cardsComputer.length)
      cardsComputer.push(deck.splice(randomCard, 1));
      else
      cardsPlayer.push(deck.splice(randomCard, 1));
      count += 1;
    }
    let cardsArrs = [];
    cardsArrs.push(cardsPlayer, cardsComputer);
    return cardsArrs;
  }
}

let gameStart = new Game();

console.log(gameStart.player[0]);

let gameRound = () => {
  
};