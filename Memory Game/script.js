// Create a card array that contains all images and their corresponding names
const cardArray = [
    {
        name : 'fries',
        img: 'images/fries.png',
    },
    {
        name : 'cheeseburger',
        img : 'images/cheeseburger.png',
    },
    {
        name : 'hotdog',
        img : 'images/hotdog.png',
    },
    {
        name : 'ice-cream',
        img : 'images/ice-cream.png',
    },
    {
        name : 'milkshake',
        img : 'images/milkshake.png',
    },
    {
        name : 'pizza',
        img : 'images/pizza.png',
    },
    {
        name : 'fries',
        img: 'images/fries.png',
    },
    {
        name : 'cheeseburger',
        img : 'images/cheeseburger.png',
    },
    {
        name : 'hotdog',
        img : 'images/hotdog.png',
    },
    {
        name : 'ice-cream',
        img : 'images/ice-cream.png',
    },
    {
        name : 'milkshake',
        img : 'images/milkshake.png',
    },
    {
        name : 'pizza',
        img : 'images/pizza.png',
    }    
]

//Shuffle the array
cardArray.sort(() => 0.5 - Math.random());

// We want to add this randomly ordered array to the grid
const gridDisplay = document.querySelector('#grid');
const resultDisplay = document.querySelector('#result');
let cardsChosen = [];
let cardsChosenIds = [];
let cardsWon = [];

function createBoard(){
    // For each element in cardarray we want to create a 
    //corresponding image element
    for(let i=0; i < cardArray.length; i++){
        const card = document.createElement('img');
        card.setAttribute('src','images/blank.png');

        // Obtain a data-id with unique value for each card.
        card.setAttribute('data-id',i);
        card.addEventListener('click', flipCard);
        gridDisplay.appendChild(card);
    }
}

function checkMatch() {
    const cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1];

    if(optionOneId == optionTwoId){
        cards[optionOneId].setAttribute('src','images/blank.png');
        cards[optionTwoId].setAttribute('src','images/blank.png');
        alert('You clicked on the same image.');
    }

    else if(cardsChosen[0] === cardsChosen[1]){
        alert('You found a match.')
        cards[optionOneId].setAttribute('src','images/white.png');
        cards[optionTwoId].setAttribute('src','images/white.png');
        cards[optionOneId].removeEventListener('click',flipCard);
        cards[optionTwoId].removeEventListener('click',flipCard);
        cardsWon.push(cardsChosen);
    }
    else{
        cards[optionOneId].setAttribute('src','images/blank.png');
        cards[optionTwoId].setAttribute('src','images/blank.png');
        alert('Sorry, try again!')
    }

    cardsChosen = [];
    cardsChosenIds = [];
    resultDisplay.textContent = cardsWon.length;

    if(cardsWon.length === cardArray.length/2){
        resultDisplay.textContent ='Congratulations you found them all!';
    }
}

function flipCard(){

    // Whichever card value is passed from CreateBoard function
    //We need to flip the card with corresponding image.
    let cardID = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardID].name);
    cardsChosenIds.push(cardID);
    this.setAttribute('src',cardArray[cardID].img);
    if(cardsChosen.length === 2){
        setTimeout(checkMatch,500);
    }
}


createBoard();

