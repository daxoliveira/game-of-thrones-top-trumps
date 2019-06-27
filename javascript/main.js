// Step 1 - Set up class constructor of card objects

class Card {
  constructor(name, picture, likeability, screenTime, numberOfKills) {
    this.name = name;
    this.picture = picture;
    this.likeability = likeability;
    this.screenTime = screenTime;
    this.numberOfKills = numberOfKills;
  }
}

// Step 2 - Create 10 cards and store them in an array

const daenerysTargaryen = new Card('Daenerys Targaryen', './images/1daenerysTargaryen.jpg', 107, 276, 6582);
const jonSnow = new Card('Jon Snow', './images/2jonSnow.jpg', 123, 338, 112);
const tyrionLannister = new Card('Tyrion Lannister', './images/3tyrionLannister.jpg', 95, 337, 32);
const sansaStark = new Card('Sansa Stark', './images/4sansaStark.jpg', 80, 239, 8);
const cerseiLannister = new Card('Cersei Lannister', './images/5cerseiLannister.jpg', 62, 236, 199);
const joffreyBaratheon = new Card('Joffrey Baratheon', './images/6joffreyBaratheon.jpg', 3, 70, 20);
const eddardStark = new Card('Eddard Stark', './images/7eddardStark.jpg', 72, 100, 37);
const aryaStark = new Card('Arya Stark', './images/8aryaStark.jpg', 96, 224, 1278);
const brienneOfTarth = new Card('Brienne of Tarth', './images/9brienneOfTarth.jpg', 91, 98, 94);
const ramsayBolton = new Card('Ramsay Bolton', './images/10ramsayBolton.jpg', 5, 66, 102);

let unshuffledDeck = [];
unshuffledDeck.push(daenerysTargaryen, jonSnow, tyrionLannister, sansaStark, cerseiLannister, joffreyBaratheon, eddardStark, aryaStark, brienneOfTarth, ramsayBolton);

// Step 3 - "Game Start Button" - Set shuffle,deal, and display functions ------------------------
// a) Shuffle - Shuffle the 10 cards

let shuffledDeck = [];

const shuffle = () => {
  for (let i = 0; i < 10; i += 1) {
    const random = Math.floor(Math.random() * unshuffledDeck.length);
    shuffledDeck.push(unshuffledDeck[random]);
    unshuffledDeck.splice(random, 1);
  }
};


// b) Deal - Divide into 2 arrays and assign the first array to Player and the second to Computer

let playerDeck;
let computerDeck;

const deal = () => {
  playerDeck = shuffledDeck.slice(0, shuffledDeck.length / 2);
  computerDeck = shuffledDeck.slice(5);
};

// "Game Start" & "Next Round" - functions for game start button and next round button

const nextRoundFunction = () => {
  document.getElementById('playerCardName').innerHTML = playerDeck[0].name;
  document.getElementById('playerCardImage').src = playerDeck[0].picture;
  document.getElementById('playerCardLikeability').innerHTML = playerDeck[0].likeability;
  document.getElementById('playerCardScreenTime').innerHTML = playerDeck[0].screenTime;
  document.getElementById('playerCardNumberOfKills').innerHTML = playerDeck[0].numberOfKills;

  document.getElementById('computerCardName').innerHTML = computerDeck[0].name;
  document.getElementById('computerCardImage').src = computerDeck[0].picture;
  document.getElementById('computerCardLikeability').innerHTML = computerDeck[0].likeability;
  document.getElementById('computerCardScreenTime').innerHTML = computerDeck[0].screenTime;
  document.getElementById('computerCardNumberOfKills').innerHTML = computerDeck[0].numberOfKills;

  document.getElementById('playerCardLikeabilityButton').classList = 'btn btn-dark text-muted list-group-item d-flex justify-content-between align-items-center';
  document.getElementById('computerCardLikeabilityButton').classList = 'btn btn-dark text-muted list-group-item d-flex justify-content-between align-items-center';

  document.getElementById('playerCardScreenTimeButton').classList = 'btn btn-dark text-muted list-group-item d-flex justify-content-between align-items-center';
  document.getElementById('computerCardScreenTimeButton').classList = 'btn btn-dark text-muted list-group-item d-flex justify-content-between align-items-center';

  document.getElementById('playerCardNumberOfKillsButton').classList = 'btn btn-dark text-muted list-group-item d-flex justify-content-between align-items-center';
  document.getElementById('computerCardNumberOfKillsButton').classList = 'btn btn-dark text-muted list-group-item d-flex justify-content-between align-items-center';
};

const startGame = () => {
  shuffle();
  deal();
  // nextRoundFunction();
};

// DOM Manipulation

const gameStartButton = document.getElementById('gameStartButton');
const nextRoundButton = document.getElementById('nextRoundButton');
const gameRestartButton = document.getElementById('gameRestartButton');

nextRoundButton.disabled = true;
gameRestartButton.disabled = true;

gameStartButton.onclick = () => {
  startGame();
  nextRoundFunction();
  document.getElementById('playerCardCover').className = 'd-none';
  document.getElementById('playerCardDiv').className = 'card';
  document.getElementById('playerCardsNumber').innerHTML = playerDeck.length;
  document.getElementById('computerCardsNumber').innerHTML = computerDeck.length;
  gameStartButton.disabled = true;
  gameRestartButton.disabled = false;
};

gameRestartButton.onclick = () => {
  unshuffledDeck = [];
  shuffledDeck = [];
  unshuffledDeck.push(daenerysTargaryen, jonSnow, tyrionLannister, sansaStark, cerseiLannister, joffreyBaratheon, eddardStark, aryaStark, brienneOfTarth, ramsayBolton);
  startGame();
  nextRoundFunction();
  document.getElementById('playerCardCover').className = 'd-none';
  document.getElementById('playerCardDiv').className = 'card';
  document.getElementById('computerCardCover').className = 'card bg-dark d-flex justify-content-center align-items-center';
  document.getElementById('computerCardDiv').className = 'd-none';
  document.getElementById('playerCardsNumber').innerHTML = playerDeck.length;
  document.getElementById('computerCardsNumber').innerHTML = computerDeck.length;

  document.getElementById('playerCardsNumberText').classList = 'text-center bg-dark text-white p-3';
  document.getElementById('playerCardsNumberText').innerHTML = 'Player Cards';
  document.getElementById('computerCardsNumberText').classList = 'text-center bg-dark text-white p-3';
  document.getElementById('computerCardsNumberText').innerHTML = 'Computer Cards';
  document.getElementById('playerCardsNumber').classList = 'text-center bg-dark text-white';
  document.getElementById('computerCardsNumber').classList = 'text-center bg-dark text-white';

  playerCardLikeability.disabled = false;
  playerCardScreenTime.disabled = false;
  playerCardNumberOfKills.disabled = false;
  computerCardLikeability.disabled = false;
  computerCardScreenTime.disabled = false;
  computerCardNumberOfKills.disabled = false;  
};


const playerCardLikeability = document.getElementById('playerCardLikeabilityButton');
const playerCardScreenTime = document.getElementById('playerCardScreenTimeButton');
const playerCardNumberOfKills = document.getElementById('playerCardNumberOfKillsButton');

const computerCardLikeability = document.getElementById('computerCardLikeabilityButton');
const computerCardScreenTime = document.getElementById('computerCardScreenTimeButton');
const computerCardNumberOfKills = document.getElementById('computerCardNumberOfKillsButton');

playerCardLikeability.onclick = () => {
  document.getElementById('computerCardCover').className = 'd-none';
  document.getElementById('computerCardDiv').className = 'card';
  if (playerDeck[0].likeability > computerDeck[0].likeability) {
    document.getElementById('playerCardLikeabilityButton').classList = 'btn btn-dark text-white bg-success list-group-item d-flex justify-content-between align-items-center';
    document.getElementById('computerCardLikeabilityButton').classList = 'btn btn-dark text-white bg-success list-group-item d-flex justify-content-between align-items-center';
  } else {
    document.getElementById('playerCardLikeabilityButton').classList = 'btn btn-dark text-white bg-danger list-group-item d-flex justify-content-between align-items-center';
    document.getElementById('computerCardLikeabilityButton').classList = 'btn btn-dark text-white bg-danger list-group-item d-flex justify-content-between align-items-center';
  }
  nextRoundButton.disabled = false;
  playerCardLikeability.disabled = true;
  playerCardScreenTime.disabled = true;
  playerCardNumberOfKills.disabled = true;
  computerCardLikeability.disabled = true;
  computerCardScreenTime.disabled = true;
  computerCardNumberOfKills.disabled = true;
  pickCategory('Likeability');
  checkWinner();
};


playerCardScreenTime.onclick = () => {
  document.getElementById('computerCardCover').className = 'd-none';
  document.getElementById('computerCardDiv').className = 'card';
  if (playerDeck[0].screenTime > computerDeck[0].screenTime) {
    document.getElementById('playerCardScreenTimeButton').classList = 'btn btn-dark text-white bg-success list-group-item d-flex justify-content-between align-items-center';
    document.getElementById('computerCardScreenTimeButton').classList = 'btn btn-dark text-white bg-success list-group-item d-flex justify-content-between align-items-center';
  } else {
    document.getElementById('playerCardScreenTimeButton').classList = 'btn btn-dark text-white bg-danger list-group-item d-flex justify-content-between align-items-center';
    document.getElementById('computerCardScreenTimeButton').classList = 'btn btn-dark text-white bg-danger list-group-item d-flex justify-content-between align-items-center';
  }
  nextRoundButton.disabled = false;
  playerCardLikeability.disabled = true;
  playerCardScreenTime.disabled = true;
  playerCardNumberOfKills.disabled = true;
  computerCardLikeability.disabled = true;
  computerCardScreenTime.disabled = true;
  computerCardNumberOfKills.disabled = true;
  pickCategory('Screen Time');
  checkWinner();
};

playerCardNumberOfKills.onclick = () => {
  document.getElementById('computerCardCover').className = 'd-none';
  document.getElementById('computerCardDiv').className = 'card';
  if (playerDeck[0].numberOfKills > computerDeck[0].numberOfKills) {
    document.getElementById('playerCardNumberOfKillsButton').classList = 'btn btn-dark text-white bg-success list-group-item d-flex justify-content-between align-items-center';
    document.getElementById('computerCardNumberOfKillsButton').classList = 'btn btn-dark text-white bg-success list-group-item d-flex justify-content-between align-items-center';
  } else {
    document.getElementById('playerCardNumberOfKillsButton').classList = 'btn btn-dark text-white bg-danger list-group-item d-flex justify-content-between align-items-center';
    document.getElementById('computerCardNumberOfKillsButton').classList = 'btn btn-dark text-white bg-danger list-group-item d-flex justify-content-between align-items-center';
  }
  nextRoundButton.disabled = false;
  playerCardLikeability.disabled = true;
  playerCardScreenTime.disabled = true;
  playerCardNumberOfKills.disabled = true;
  computerCardLikeability.disabled = true;
  computerCardScreenTime.disabled = true;
  computerCardNumberOfKills.disabled = true;
  pickCategory('Number of Kills');
  checkWinner();
};

nextRoundButton.onclick = () => {
  document.getElementById('computerCardCover').className = 'card bg-dark d-flex justify-content-center align-items-center';
  document.getElementById('computerCardDiv').className = 'd-none';
  playerCardLikeability.disabled = false;
  playerCardScreenTime.disabled = false;
  playerCardNumberOfKills.disabled = false;
  computerCardLikeability.disabled = false;
  computerCardScreenTime.disabled = false;
  computerCardNumberOfKills.disabled = false;
  nextRoundFunction();
};

// Step 4 - Set "Play Round Function"

// a) Set function in which the player picks category on-click

const pickCategory = (category) => {
  let roundCardLost;
  let roundCardWon;
  switch (category) {
    case 'Likeability':
      if (playerDeck[0].likeability > computerDeck[0].likeability) {
        roundCardLost = computerDeck.shift();
        roundCardWon = playerDeck.shift();
        playerDeck.push(roundCardLost);
        playerDeck.push(roundCardWon);
      } else {
        roundCardLost = playerDeck.shift();
        roundCardWon = computerDeck.shift();
        computerDeck.push(roundCardLost);
        computerDeck.push(roundCardWon);
      }
      break;

    case 'Screen Time':
      if (playerDeck[0].screenTime > computerDeck[0].screenTime) {
        roundCardLost = computerDeck.shift();
        roundCardWon = playerDeck.shift();
        playerDeck.push(roundCardLost);
        playerDeck.push(roundCardWon);
      } else {
        roundCardLost = playerDeck.shift();
        roundCardWon = computerDeck.shift();
        computerDeck.push(roundCardLost);
        computerDeck.push(roundCardWon);
      }
      break;

    case 'Number of Kills':
      if (playerDeck[0].numberOfKills > computerDeck[0].numberOfKills) {
        roundCardLost = computerDeck.shift();
        roundCardWon = playerDeck.shift();
        playerDeck.push(roundCardLost);
        playerDeck.push(roundCardWon);
      } else {
        roundCardLost = playerDeck.shift();
        roundCardWon = computerDeck.shift();
        computerDeck.push(roundCardLost);
        computerDeck.push(roundCardWon);
      }
      break;

    default:
      console.log('You need to click on the next round button in order to go on with the game!');
      break;
  }
  const playerCardsNumber = document.getElementById('playerCardsNumber');
  const computerCardsNumber = document.getElementById('computerCardsNumber');
  playerCardsNumber.innerHTML = `${playerDeck.length}`;
  computerCardsNumber.innerHTML = `${computerDeck.length}`;
};

// Step 5 - Set "Check Winner" function

const checkWinner = () => {
  if (playerDeck.length === 0) {
    document.getElementById('playerCardsNumberText').classList = 'text-center bg-danger text-white p-3';
    document.getElementById('playerCardsNumberText').innerHTML = 'GAME OVER! Dracarys!';
    document.getElementById('computerCardsNumberText').classList = 'text-center bg-danger text-white p-3';
    document.getElementById('computerCardsNumberText').innerHTML = 'You will become dragon barbecue!';
    document.getElementById('playerCardsNumber').classList = 'text-center bg-danger text-white';
    document.getElementById('computerCardsNumber').classList = 'text-center bg-danger text-white';
    gameStartButton.disabled = true;
    nextRoundButton.disabled = true;
    gameRestartButton.disabled = false;
  }
  if (computerDeck.length === 0) {
    document.getElementById('playerCardsNumberText').classList = 'text-center bg-success text-white p-3';
    document.getElementById('playerCardsNumberText').innerHTML = `YOU'VE WON! The throne is yours!`;
    document.getElementById('computerCardsNumberText').classList = 'text-center bg-success text-white p-3';
    document.getElementById('computerCardsNumberText').innerHTML = `YOU'VE WON! The throne is yours!`;
    document.getElementById('playerCardsNumber').classList = 'text-center bg-success text-white';
    document.getElementById('computerCardsNumber').classList = 'text-center bg-success text-white';
    gameStartButton.disabled = true;
    nextRoundButton.disabled = true;
    gameRestartButton.disabled = false;
  }
  return console.log(`The game is still going, the current score is Player ${playerDeck.length} cards vs. Computer ${computerDeck.length} cards!`);
};

window.onload = () => {
  document.getElementById('gotThemeSong').play();
};
