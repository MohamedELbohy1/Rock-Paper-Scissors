const options=['rock','scissors','paper'];
let playerScore=0;
let computerScore=0;
let scorefinsh =3;

const rockbtn=document.querySelector('.rock');
const paperbtn=document.querySelector('.paper');
const scissorsbtn=document.querySelector('.scissors');
const nwgamebtn=document.querySelector('.newgame');
const playerdisplay=document.querySelector('#player');
const computerdisplay=document.querySelector('#computer');
const roundscore=document.querySelector('.roundscore');
const finalscore=document.querySelector('.finalscore');

rockbtn.addEventListener('click', () => playRound('rock',getcomputerchoice()));
paperbtn.addEventListener('click', () => playRound('paper',getcomputerchoice()));
scissorsbtn.addEventListener('click', () => playRound('scissors',getcomputerchoice()));
nwgamebtn.addEventListener('click',function (){
  computerScore = 0;
  playerScore=0;
  roundscore.innerText = "";
  player.innerText = "";
  computer.innerText = "";
  finalscore.innerText = "";
  rockbtn.disabled = false;
  paperbtn.disabled = false;
  scissorsbtn.disabled = false;
})
function disableButtons() {
  rockbtn.disabled = true;
  paperbtn.disabled = true;
  scissorsbtn.disabled = true;
}



function getcomputerchoice (){
    return options[Math.floor(Math.random()*options.length)];

}

function checkwinner(){
  if(playerScore >= scorefinsh || computerScore >=scorefinsh){
    disableButtons();
  
  if(playerScore == scorefinsh ){
    console.log(`Congratulations , You Won ! final result : playerScore: ${playerScore}, computerScore: ${computerScore}`);
    finalscore.style.color='green';
    finalscore.textContent=`Congratulations , You Won ! final result : playerScore: ${playerScore}, computerScore: ${computerScore}`;

  }
  else {
    console.log(`Sorry, You Lost ! final result : playerScore: ${playerScore}, computerScore: ${computerScore}`);
    finalscore.style.color = 'red'
    finalscore.textContent = `Sorry, You Lost ! final result : playerScore: ${playerScore}, computerScore: ${computerScore}`;

  }

}
}


function playRound(playerSelection, computerSelection){
playerSelection=playerSelection.toLowerCase();
computerSelection=computerSelection.toLowerCase();
if(playerSelection==computerSelection){
  console.log('its a Tie , You chose the same');
  roundscore.innerText=`It is a tie, you choosed the same as computer \n playerScore: ${playerScore}, computerScore: ${computerScore}`;
}
else if((playerSelection === "rock" && computerSelection === "paper") ||
(playerSelection === "scissors" && computerSelection === "rock") ||
(playerSelection === "paper" && computerSelection === "scissors")){
  ++computerScore;
  console.log(`You lose , You chose ${playerSelection} and The computer chose ${computerSelection}`);
  roundscore.innerText=`playerScore: ${playerScore}, computerScore: ${computerScore}`
  
}
else if ((playerSelection === "paper" && computerSelection === "rock") ||
(playerSelection === "rock" && computerSelection === "scissors") ||
(playerSelection === "scissors" && computerSelection === "paper")){
++playerScore;
console.log(`You Win ,You chose ${playerSelection} and the computer chose ${computerSelection}`);

roundscore.innerText=`playerScore: ${playerScore}, computerScore: ${computerScore}`;
}
playerdisplay.textContent = `Player Selection: ${playerSelection}`;
computerdisplay.textContent = `, Computer Selection: ${ computerSelection}`;

checkwinner();

}