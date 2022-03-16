////////////////////////
//pregame and globals//
//////////////////////
alert(`Welcome to SpaceMan.

Press the start button to begin.
Upon starting the game you'll be given a hidden word.
Guess the letters to reveal the hidden word.

CAREFUL...
too many guesses can lead your astronaut astray..
`);

//globals
let word = "";
let health = 3;

////////////////////////////
//start and reset buttons//
//////////////////////////

//start game
function startGame() {
  event.preventDefault();
  getWord();
  startButton.style.display = "none";
  answerHeader.innerText = "Guess a Letter at a time!";
}
//reset game
function resetGame() {
  window.location.reload();
}

///////////////////////
//Word Generator API//
/////////////////////

function getWord(event) {
  fetch("https://random-word-api.herokuapp.com/word?swear=0")
    .then((res) => {
      return res.json();
    })

    .then((res) => {
      word = res.pop().toUpperCase();
      console.log(`The Answer Is ${word}`);

      for (let i = 0; i < word.length; i++) {
        const div = document.createElement("div");
        div.setAttribute("name", word[i]);
        div.classList.add("divLetter");
        // console.log(div.getAttribute("name"));
        document.querySelector("#letterBoard").append(div);
      }
    });
}
/////////////////
//answer check//
///////////////

function checkAnswer() {
  let answer = document.getElementById("answer").value.toUpperCase();
  let blocks2Array = document.querySelectorAll(".divLetter");
  let newBlocks = Array.from(blocks2Array).map((x) => x.getAttribute("name"));

  for (i = 0; i < newBlocks.length; i++) {
    if (answer == newBlocks[i]) {
      console.log(`${answer} is correct. its located at ${i}`);
      blocks2Array.innerText += newBlocks[i];
      blocks2Array[i].style.border = `5px solid green`;
      blocks2Array[i].style.color = `green`;
    }
  }
} //end of function
