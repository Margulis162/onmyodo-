//variables

//picked element
let elm ="Tree";

//curently active button
let activeButton;

//random number for computer picked element

let randElementPick = Math.random();
//computer move

let computerMove;

//player mp
let pmp =10;
//computer mp
let cmp =10;


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
function computerMoveGen(){
  
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
  
   randElementPick = Math.random();
   return computerMove;
}
 

//display mp
function mpDisplay(){
document.getElementById('player_mana').innerHTML = `MP: ${pmp}`;

document.getElementById('computer_mana').innerHTML = `MP: ${cmp}`;

}
//battle processor
function battle(){
  computerMove = computerMoveGen();
  console.log("player " + elm);
  console.log("cpmputer " + computerMove );

 
  if(pmp>0 && cmp>0){

    //element Tree interactions
   if(elm == "Tree" && computerMove == "Tree"){
    pmp+=4;
    cmp+=4;
        if(pmp>10){
         pmp=10;
    }
         if(cmp>10){
          cmp=10;
    }
        mpDisplay();
        outliner();
        gameEndings();
  }

    else if(elm == "Tree" && computerMove =="Fire"){
      pmp-=4;
      mpDisplay();
      outliner();
      gameEndings();
    }
    else if(elm == "Tree" && computerMove =="Earth"){
      pmp+=5;
      if(pmp>10){
        pmp=10;
      }
      mpDisplay();
      outliner();
      gameEndings();
    }
    else if(elm == "Tree" && computerMove =="Metal"){
      pmp-=3;
      mpDisplay();
      outliner();
      gameEndings();
    }
    else if(elm == "Tree" && computerMove =="Water"){
      pmp+=2;
      if(pmp>10){
        pmp=10;
      }
      mpDisplay();
      outliner();
      gameEndings();
    }
    

      //element Fire interactions
   else if(elm == "Fire" && computerMove == "Tree"){
    cmp-=4;
    
    mpDisplay();
    gameEndings();
     }

    else if(elm == "Fire" && computerMove =="Fire"){
      pmp-=4;
      cmp-=4;
      mpDisplay();
      gameEndings();
    }
    else if(elm == "Fire" && computerMove =="Earth"){
      cmp+=3;
      if(cmp>10){
        cmp=10;
      }
      mpDisplay();
      gameEndings();
    }
    else if(elm == "Fire" && computerMove =="Metal"){
      cmp-=3;
      mpDisplay();
      gameEndings();
    }
    else if(elm == "Fire" && computerMove =="Water"){
      pmp-=4;
      
      mpDisplay();
      gameEndings();
    }



      //element Earth interactions
      else if(elm == "Earth" && computerMove == "Tree"){
        pmp-=3;
        
        mpDisplay();
        gameEndings();
         }
    
        else if(elm == "Earth" && computerMove =="Fire"){
          pmp+=2;
          if(pmp>10){
            pmp=10;
       }
          
          mpDisplay();
          gameEndings();
        }
        else if(elm == "Earth" && computerMove =="Earth"){
          cmp+=2;
          pmp+=2;
          if(cmp>10){
            cmp=10;
          }
          if(pmp>10){
            pmp=10;
       }
          mpDisplay();
          gameEndings();
        }
        else if(elm == "Earth" && computerMove =="Metal"){
          pmp-=2;
          mpDisplay();
          gameEndings();
        }
        else if(elm == "Earth" && computerMove =="Water"){
          cmp-=3;
          
          mpDisplay();
          gameEndings();
        }

        //element Metal interactions
      else if(elm == "Metal" && computerMove == "Tree"){
        cmp-=3;
      mpDisplay();
      gameEndings();
         }
    
        else if(elm == "Metal" && computerMove =="Fire"){
          pmp-=3;
          mpDisplay();
          gameEndings();
        }
        else if(elm == "Metal" && computerMove =="Earth"){
          pmp+=2;
          if(pmp>10){
            pmp=10;
       }
          mpDisplay();
          gameEndings();
        }
        else if(elm == "Metal" && computerMove =="Metal"){
          pmp--;
          cmp--;
          mpDisplay();
          gameEndings();
        }
        else if(elm == "Metal" && computerMove =="Water"){
          pmp-=3;
          
          mpDisplay();
          gameEndings();
        }
    


          //element Water interactions
      else if(elm == "Water" && computerMove == "Tree"){
        cmp+=2;
        if(cmp>10){
          cmp=10;
        }
        mpDisplay();
        gameEndings();
         }
    
        else if(elm == "Water" && computerMove =="Fire"){
          cmp-=4;
          mpDisplay();
          gameEndings();
        }
        else if(elm == "Water" && computerMove =="Earth"){
          pmp-=3;
          mpDisplay();
          gameEndings();
        }
        else if(elm == "Water" && computerMove =="Metal"){
          cmp-=3;
          mpDisplay();
          gameEndings();
        }
        else if(elm == "Water" && computerMove =="Water"){
          pmp++;
          cmp++;
          if(pmp>10){
            pmp=10;
       }
            if(cmp>10){
             cmp=10;
       }
          
          mpDisplay();
          gameEndings();
        }
    





  }
   //game endings
   function gameEndings(){
   if(pmp<=0 && cmp>0){
    alert("You were defited. Game over.");
   } 
    else if(cmp <= 0 && pmp >0){
      alert("Victory!");
    }
    else if(pmp<=0 && cmp<=0){
      alert("Everybody loose the war.");
    }
   

}
}
 function outliner(){

   const lst =[...document.getElementsByClassName('playerMP')];
   var listLength = lst.length;
    for (var i =0; i < listLength; i++){
      if (lst[i].innerHTML < pmp){
        lst[i].classList.add('btn-outline')
      }
    }
       
    
    
    }
    

//TODO: 1. More testing;
// 2. Make tower buttons to outline as mp goes down
//3.  Add animation 
