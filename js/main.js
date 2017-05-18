

var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png",
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png",
},
{
	rank: "king",
	suit: "hearts",
	cardImage:"images/king-of-hearts.png",
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png",
}
];

var cardsInPlay = [];
var checkForMatch = function(cardId) {
	// this.getAttribute(cards[cardId].cardImage);
	if(cardsInPlay.length === 2)	{
	 	if (cardsInPlay[0] === cardsInPlay[1]) {
	      	console.log("You found a match!");
	      	alert("You found a match!");
  		} else {
  			console.log("Sorry, try again.");
     		 alert("Sorry, try again.");
     		 
     		 cardsInPlay = [];
  		}
  	}
};

var flipCard = function() {
	console.log('this', this)
	var cardId = Number(this.dataset.id);
	this.setAttribute('src', cards[cardId].cardImage)
	//this.getAttribute(cards[cardId]);
	console.log("User flipped" + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	checkForMatch(cardId);
};

var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute("src", "images/back.png");
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
   };	
};

createBoard();


