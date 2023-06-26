//variables

//picked element
let elm;

//curently active button
let activeButton;

//random number for computer picked element

let randElementPick = Math.random();
//computer move

let computerMove;





//functions

//element picker player
function elmPicker(elem) {
  elm = elem.innerHTML;
  removeActiveClass();
  elem.classList.add('active');
  console.log(elm);
}

//active class removal
function removeActiveClass() {
  activeButton = document.querySelector('.active');
  if (activeButton) {
    activeButton.classList.remove('active');
  }
}

//element selector computer
function computerMoveGen (){
  
   if (randElementPick >= 0  && randElementPick < 1/5) {
    computerMove = "Tree";
   }
   else if (randElementPick >= 1/5  && randElementPick < 2/5){
    computerMove = "Fire";
   }
  
   else if (randElementPick >= 2/5  && randElementPick < 3/5){
    computerMove = "Earth";
   }
   else if (randElementPick >= 3/5  && randElementPick < 4/5){
    computerMove = "Metal";
   }
   else if (randElementPick >= 4/5  && randElementPick < 1){
    computerMove = "Water";
   }
   console.log(randElementPick);
   console.log(computerMove);
   randElementPick = Math.random();
}

function test(){
  console.log(randElementPick);
}