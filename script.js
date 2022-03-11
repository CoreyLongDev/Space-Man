////////////////////////
//pregame and globals//
//////////////////////

// firstHP.style.display = 'none'
// secondHP.style.display = 'none'
// thirdHP.style.display = 'none'
// letter.style.display = 'none'
let word = "";

////////////////////////////
//start and reset buttons// -- WORKING, ADDITIONS NEEDED
//////////////////////////

function startGame() {
  event.preventDefault();
  //WHY THE HELL IS THIS DISREGARDING THE CSS FILES INSTRUCTIONS
//   firstHP.style.display = 'block'
//   secondHP.style.display = 'block'
//   thirdHP.style.display = 'block'
//   letter.style.display = 'block'
  getWord();
}
function resetGame() {
  window.location.reload();
}

///////////////////////
//Word Generator API//  -- WORKING
/////////////////////

function getWord(event) {
  fetch("https://random-word-api.herokuapp.com/word?swear=0")
    .then((res) => {
      return res.json();
    })

    .then((res) => {
      //push fetch to value
      word = res.pop();
    //   console.log(word.split(""));
      word.split("").forEach((char) => letterInput(char));
    });
}

/////////////////
//letter Board// -- WORKING
////////////////

function letterInput(letter) {
  let newInput = document.createElement("input");
  //   type="text" id="letter" maxlength="1"
  newInput.type = "text";
  newInput.value = letter;
  newInput.maxLength = 1;
  newInput.className = 'letter'
  const form = document.querySelector("form");
  form.appendChild(newInput);
}
/////////////////
//answer check//
///////////////
function checkAnswer() {
 let answer = document.querySelector('answer')
 console.log(answer)
}
