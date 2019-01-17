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
}


let symbols = ['fa-diamond', 'fa-diamond', 'fa-paper-plane-o', 'fa-paper-plane-o', 'fa-anchor', 'fa-anchor', 'fa-bolt', 'fa-bolt', 'fa-cube', 'fa-cube', 'fa-leaf', 'fa-leaf', 'fa-bicycle', 'fa-bicycle', 'fa-bomb', 'fa-bomb']
var firstPass = true;
var firstItem = "";
var secondItem = "";

function run() {
  /* Shuffle the symbols */
  shuffle(symbols);
  console.log("After shuffle: " + symbols);

  /* Select all the tiles inside the UL Deck */
  deckTiles = document.querySelector('.deck');
  allItems = deckTiles.querySelectorAll('i');

  /* Add the new shuffled classes to the List Items */
  for (let i = 0; i < symbols.length; i++) {
    allItems[i].removeAttribute("class");
    allItems[i].classList.add('fa');
    allItems[i].classList.add(symbols[i]);
    console.log(allItems[i]);
  }

};
console.log("After Program: " + symbols);

run();

/*

const clickOccurred = function() {
      this.classList.add("open");
      this.classList.add("show");
      if (firstPass === true) {
        firstSelection = this.querySelector("i");
        firstItem = firstSelection;
        console.log("This is the first click.");
        console.log(i)
        console.log(firstItem);
        firstPass = false;
        secondItem = "";
        secondSelection = "";
      }
      else {
        var secondSelection = this.querySelector("i");
        secondItem = secondSelection;
        this.classList.add("open");
        this.classList.add("show");
        if (firstItem === secondItem) {
          console.log(firstPass)
          console.log("This is a fucking match.")
          console.log(firstItem);
          console.log(secondItem);
          this.classList.add("match");
          console.log(i);
          firstPass = true;
          firstItem = "";
          secondItem = "";
          firstSelection = "";
          secondSelection = "";
        }
        else {
          console.log("This is not a match.");
          this.classList.remove("open");
          this.classList.remove("show");
          console.log(firstSelection);
          console.log(secondItem);
          firstPass = true;
          firstItem = "";
          secondItem = "";
          firstSelection = "";
          secondSelection = "";
        }
      }
};


for (var i = 0; i < classname.length; i++) {
    classname[i].addEventListener('click', clickOccurred, false);
}
*/
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
