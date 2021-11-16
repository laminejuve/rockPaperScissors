function computerPlay(){
    let choices = ["paper","rock","scissors"];
    let computerPlay = choices[Math.floor(Math.random()*choices.length)];
    return computerPlay;
}
let player = 0;
let computer =0;
function playRound(playerSelection, computerSelection) {
    let result;
    if (computerSelection==="scissors"){
        if (playerSelection === "paper"){
            result="You Lose! "+computerSelection +" beats "+playerSelection;
            computer++;
        } else if (playerSelection === "rock"){
                   result="You Win! "+playerSelection +" beats "+computerSelection;
                   player++;
                }else {
                   result="this is a Tie! "+playerSelection +" is the same as "+computerSelection;
                }
    }
    if (computerSelection==="paper"){
        if (playerSelection === "rock"){
            result="You Lose! "+computerSelection +" beats "+playerSelection;
            computer++;
        } else if (playerSelection === "scissors"){
                   result="You Win! "+playerSelection +" beats "+computerSelection;
                   player++;
                }else {
                   result="this is a Tie! "+playerSelection +" is the same as "+computerSelection;
                }
    }
    if (computerSelection==="rock"){
        if (playerSelection === "scissors"){
            result="You Lose! "+computerSelection +" beats "+playerSelection;
            computer++;
        } else if (playerSelection === "paper"){
                   result="You Win! "+playerSelection +" beats "+computerSelection;
                   player++;
                }else {
                   result="this is a Tie! "+playerSelection +" is the same as "+computerSelection;
                }
    }
    return result;
}
function game(btnName){
    div1.textContent= playRound(btnName, computerPlay());
    if (player < 5 && computer <5){
        div2.textContent="Computer : "+computer+"    player :"+player;
    }else if (computer < player){
        div2.textContent="Congratulation!! you Win against the computer "
        +player+"-"+computer+"  now you can start a new game";
        player=0;
        computer =0;
        }else{
        div2.textContent="You lose against the computer "
        +player+"-"+computer+"   now you can start a new game";
        player=0;
        computer =0;

          }
    div1.style.border = 'solid 5px black';
    div2.style.border = 'solid 5px black';


}
let btn1 = document.createElement("button");
btn1.innerHTML = "Rock";
btn1.name = "rock";
btn1.onclick = function () {
    game(btn1.name);
  };
document.body.appendChild(btn1);


let btn2 = document.createElement("button");
btn2.innerHTML = "Scissors";
btn2.name = "scissors"
btn2.onclick = function () {
    game(btn2.name);
  };
document.body.appendChild(btn2);

let btn3 = document.createElement("button");
btn3.innerHTML = "Paper";
btn3.name = "paper"
btn3.onclick = function () {
    game(btn3.name);
  };
document.body.appendChild(btn3);

let div1 = document.createElement('div');
document.body.appendChild(div1);
let div2 = document.createElement('div');
document.body.appendChild(div2);



