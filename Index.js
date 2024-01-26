let firstCard=10;
let secondCard=7;
let sum=firstCard+secondCard;
let hasBlackJack=false;
let isAlive=true;
let message="";

let messageEl=document.getElementById("message-el")
let sumEl=document.getElementById("sum-el");
let cardEl=document.querySelector("#card-el");

function startGame()
{
    renderGame()
}

function renderGame()
{
    if(sum<21)
    {
        message="Do you want to draw a new card? 🙂"
    }
    else if(sum===21)
    {
        message="Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true
    }
    else if(sum>21)
    {
        message="You're out of the game! 😭"
        isAlive=false
    }

    messageEl.textContent=message;
    sumEl.textContent="Sum: "+sum;
    cardEl.textContent="Cards: "+firstCard+" "+secondCard;
}  


function newCard()
{
    let newCard=4;
    sum+=newCard;
    startGame();
}