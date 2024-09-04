function makeBubble(){
    let clutter="";
for(let i =1;i<=126;i++){
    let rnum =Math.floor(Math.random()*10);
  clutter+=  `<div class="bubble">${rnum}</div>`
}

document.querySelector(".cnbottom").innerHTML=clutter;}
makeBubble(); 



let timer=60;
let score =0;
let rn="";
 let timerval=function getTime(){
    setInterval(()=>{
        if(timer>0){
            timer--;
            document.querySelector("#times").innerText=timer;
        }
        else{
            clearInterval(timerval);
            let finalSc= `<h1>Game Over.Your Final Score is ${score}!</h1>`;
            document.querySelector(".cnbottom").innerHTML=finalSc;
            document.querySelector("#hitter").innerText="";
        }

    },1000)
  
}
timerval();
function getScore(){
   
    score+=10;
    document.querySelector("#scores").innerText=score;

}


function getHit(){
  rn= Math.floor( Math.random()*10);
   document.querySelector("#hitter").innerText=rn;
}
getHit();




document.querySelector(".cnbottom").addEventListener("click",(details)=>{
let res=Number(details.target.innerText);
if(res===rn){
    getScore();
    getHit();
    makeBubble();
  
}

    
})