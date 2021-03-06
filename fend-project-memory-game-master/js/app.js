/*
 * Create a list that holds all of your cards
 */


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976

/* Variables */

let symbols = ['fa-diamond', 'fa-diamond', 'fa-paper-plane-o', 'fa-paper-plane-o', 'fa-anchor', 'fa-anchor', 'fa-bolt', 'fa-bolt', 'fa-cube', 'fa-cube', 'fa-leaf', 'fa-leaf', 'fa-bicycle', 'fa-bicycle', 'fa-bomb', 'fa-bomb']
var firstPass = true;
var cardStore = [];
var secondItem = "";
let recycleCards = document.querySelector('.restart');
var allCards = document.querySelectorAll('.card');
var allOpen = 0;
var match = 0;
var moves = 0;
var firstOpenCard = '';
var allMatches = [];
var itemOne = '';
var itemTwo = '';
var countDisplay = document.querySelector('span');
var stars = '';

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
};

/* Recreate the unordered list of cards, initialize all variables */
function buildTheDeck() {
  deckTiles = document.querySelector('.deck');
  allItems = deckTiles.querySelectorAll('i');

  for (let i = 0; i < symbols.length; i++) {
    allItems[i].removeAttribute("class");
    allItems[i].classList.add('fa');
    allItems[i].classList.add(symbols[i]);
    allItems[i].parentNode.classList.remove('open','show', 'match');
    cardStore = [];
    itemOne = '';
    itemTWo = '';
    moves = 0;
    countDisplay.innerText = 0;
  }
};


/* Recycle Cards if Recycle is Clicked */
function checkForRecycle() {
  let recycleCards = document.querySelector('.restart');
  recycleCards.onclick = function(){
    shuffle(symbols);
    buildTheDeck();
    console.log('Recycle Trigger by Button');
  }
};


/* Process Clicks */
function checkCards(){
  for (var i = 0; i < allCards.length; i++) {
      allCards[i].addEventListener('click', checkForFirstClick, false);
  };
};

function checkForFirstClick() {
  console.log('A deck tile was clicked!');
  firstItem = this.querySelector("i");

  /* Ensure the user is clicking on an unopened and unmatched card */
  if ((firstItem.parentNode.classList.contains('open')) || (firstItem.parentNode.classList.contains('match'))){
    return;
  }

  /*proeed with verifying the cards */
  cardStore.push(this.querySelector("i"));
  if (cardStore.length > 1) {
    itemOne = cardStore[0].classList;
    itemTwo = cardStore[1].classList;
  };


  this.classList.add('open', 'show');

  setTimeout (function(){
    /* Check the length of the card array to ensure two clicks have occured */
    if (cardStore.length > 1) {

      /* Increment the move counter and display it's most current value */
      moves++;
      countDisplay.innerText = moves;

      /* Compare the classes for a match */
      if (itemOne[1] == itemTwo[1]) {
          console.log('This is a Match');
          /* Set the card classes if match */
          cardStore[0].parentNode.classList.add('match');
          cardStore[1].parentNode.classList.add('match');
          cardStore[0].parentNode.classList.remove('open','show');
          cardStore[1].parentNode.classList.remove('open','show');
          cardStore = [];
          itemOne = '';
          itemTwo = '';
          match++;
          console.log("Match Counter:"  + match)
          if (match > 7) {
            console.log("Game Over, You Win");
          }
        } else {
          console.log('This is not a Match')
          cardStore[0].parentNode.classList.remove('open','show');
          cardStore[1].parentNode.classList.remove('open','show');
          cardStore = [];
          itemOne = '';
          itemTwo = '';
        }

      }
    }, 500);
    if (moves == 2) {
      document.getElementsByClassName("stars").removeChild[0];
    };
};

function run() {

  /* Shuffle the symbols */
  shuffle(symbols);
  console.log('Symbols')

  /* Build the deck after the initial shuffle */
  buildTheDeck();
  console.log('Build The Deck')

  /* Recycle the deck if the Restart button was pressed */
  checkForRecycle();
  console.log('Check for Recycle')

  /* Recognize first click of an item */
  checkCards();
  console.log('Check Cards')


};


run();



/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
