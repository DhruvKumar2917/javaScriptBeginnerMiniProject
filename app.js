let gameSeq=[];
let userSeq=[];

let started=false;
let level=0;
let btns=["yellow","red","purple","green"];

let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
  if(started==false){
    started=true;

    levelUp();
  }
});

function btnFlash(btn){
  btn.classList.add("flash");
  setTimeout(()=>{
    btn.classList.remove("flash");
  },250);
}

function userFlash(btn){
  btn.classList.add("userflash");
  setTimeout(()=>{
    btn.classList.remove("userflash");
  },250);
}

function levelUp(){
  userSeq=[];
  level++;
  h2.innerText =`Level ${level}`;
  let rndIdx=Math.floor(Math.random()*4);
  let btn =document.querySelector(`.${btns[rndIdx]}`);
  gameSeq.push(btns[rndIdx]);
  btnFlash(btn);
}
function checkAns(ind){
if(userSeq[ind]===gameSeq[ind]){
  if(userSeq.length==gameSeq.length){
    setTimeout(levelUp,500);
  }
}
else{
  h2.innerHTML=`Game Over! Your Score Was <b>${level}</b> Press any Other Key to Start`;
  document.querySelector("body").style.backgroundColor="red";
  setTimeout(function(){
document.querySelector("body").style.backgroundColor="white";
  },150);
  reset();
}
}

function btnPress(){
  let btn=this;
  userFlash(this);
  let userColor=btn.getAttribute("id");
  userSeq.push(userColor);
  checkAns(userSeq.length-1);

}
let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
  btn.addEventListener("click",btnPress);
}

 function reset(){
  level=0;
  started=false;
  gameseq=[];
  userSeq=[];
 }