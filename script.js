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
function game(){
    for (let i = 0 ; i < 5; i++ ){
      let choice = window.prompt("enter your choice for playin please!");
      console.log(playRound(choice.toLowerCase() ,computerPlay()));
      console.log("Computer : "+computer+"    player :"+player);
    }
    console.log("Final Result :");

    if (computer < player){
        console.log("Congratulation!! you Win against the computer "+player+"-"+computer);
    }else if (computer > player) {
        console.log("You lose against the computer "+player+"-"+computer);
    }
}
game();
