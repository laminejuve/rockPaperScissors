
const playerMove = document.querySelectorAll(".play");
const score = document.querySelector(".number");

playerMove.forEach(element => element.addEventListener('click', function (e) {
    let playerSelection = e.target.closest(".play").id;
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    score.textContent = player;

    const html = `
                              <div class="winner">
                                <h1>YOU PICKED</h1>
                                <div class="play" id="${playerSelection}">
                                  <img src="./images/icon-${playerSelection}.svg" alt="" height="50px" width="50px">
                                </div>
                              </div>
                            
                              <div class="winner">
                                <h1>${result}</h1>
                                <div class="playAgain">PLAY AGAIN</div>
                              </div>
                              <div class="winner">
                                 <h1>THE HOUSSE PICKED</h1>
                                 <div class="play" id="${computerSelection}">
                                   <img src="./images/icon-${computerSelection}.svg" alt="" height="50px" width="50px">
                                 </div>
                              </div>
                              `
    document.querySelector(".main .container").style.display = "none";
    document.querySelector(".main .container2").insertAdjacentHTML('afterbegin', html);
    document.querySelector(".main .container2").style.display = "flex";
    const replay = document.querySelector('.playAgain');
    console.log(replay);
    replay.addEventListener('click', function (e) {
        const winner = document.querySelectorAll(".winner");
        winner.forEach(win => document.querySelector(".main .container2").removeChild(win));
        document.querySelector(".main .container2").style.display = "none";
        document.querySelector(".main .container").style.display = "flex";
    });
}));

function computerPlay() {
    let choices = ["paper", "rock", "scissors"];
    let computerPlay = choices[Math.floor(Math.random() * choices.length)];
    return computerPlay;
}
let player = 0;
let computer = 0;
let result = '';
function playRound(playerSelection, computerSelection) {
    if (computerSelection === "scissors") {
        if (playerSelection === "paper") {
            result = "You Lose! ";
            // computer++;
            player--;
        } else if (playerSelection === "rock") {
            result = "You Win! ";
            player++;
        } else {
            result = "this is a Tie! ";
        }
    }
    if (computerSelection === "paper") {
        if (playerSelection === "rock") {
            result = "You Lose! ";
            // computer++;
            player--;
        } else if (playerSelection === "scissors") {
            result = "You Win! ";
            player++;
        } else {
            result = "this is a Tie! ";
        }
    }
    if (computerSelection === "rock") {
        if (playerSelection === "scissors") {
            result = "You Lose! ";
            // computer++;
            player--;
        } else if (playerSelection === "paper") {
            result = "You Win! ";
            player++;
        } else {
            result = "this is a Tie! ";
        }
    }
    return result;
}
// function game(btnName) {
//     div1.textContent = playRound(btnName, computerPlay());
//     if (player < 5 && computer < 5) {
//         div2.textContent = "Computer : " + computer + "    player :" + player;
//     } else if (computer < player) {
//         div2.textContent = "Congratulation!! you Win against the computer "
//             + player + "-" + computer + "  now you can start a new game";
//         player = 0;
//         computer = 0;
//     } else {
//         div2.textContent = "You lose against the computer "
//             + player + "-" + computer + "   now you can start a new game";
//         player = 0;
//         computer = 0;

//     }
//     div1.style.border = 'solid 5px black';
//     div2.style.border = 'solid 5px black';


// }

// let btn1 = document.createElement("button");
// btn1.innerHTML = "Rock";
// btn1.name = "rock";
// btn1.onclick = function () {
//     game(btn1.name);
// };
//document.body.appendChild(btn1);


// let btn2 = document.createElement("button");
// btn2.innerHTML = "Scissors";
// btn2.name = "scissors"
// btn2.onclick = function () {
//     game(btn2.name);
// };
// //document.body.appendChild(btn2);

// let btn3 = document.createElement("button");
// btn3.innerHTML = "Paper";
// btn3.name = "paper"
// btn3.onclick = function () {
//     game(btn3.name);
// };
// //document.body.appendChild(btn3);

// let div1 = document.createElement('div');
// //document.body.appendChild(div1);
// let div2 = document.createElement('div');
// //document.body.appendChild(div2);



