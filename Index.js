let cards=[];
let sum=0;
let hasBlackJack=false;
let isAlive=true;
let message="";

let messageEl=document.getElementById("message-el")
let sumEl=document.getElementById("sum-el");
let cardEl=document.getElementById("card-el");

function getRandomCard()
{
    let Value=Math.floor(Math.random()*13)+1;
    if(Value===1)return 11;
    else if(Value>=11&&Value<=13)return 10;
    else return Value;
}

function startGame()
{ 
    isAlive=true;
    hasBlackJack=false;
    let firstCard=getRandomCard();
    let secondCard=getRandomCard();
    cards=[firstCard,secondCard];
    sum=firstCard+secondCard;
    renderGame();
}

function renderGame()
{
    if(sum<21)message="Do you want to draw a new card? 🙂";
    else if(sum===21)
    {
        message="Wohoo! You've got Blackjack! 🥳";
        hasBlackJack = true;
    }
    else if(sum>21)
    {
        message="You're out of the game! 😭";
        isAlive=false;
    }

    messageEl.textContent=message;
    sumEl.textContent="Sum: "+sum;
    cardEl.textContent="Cards: ";

    for(let i=0;i<cards.length;i++)
    {
        cardEl.textContent+=cards[i]+" ";
    }
    
}  

function newCard()
{
    if(isAlive&&!hasBlackJack)
    {
        let newCard=getRandomCard();
        sum+=newCard;
        cards.push(newCard);
        renderGame();
    }   
}



