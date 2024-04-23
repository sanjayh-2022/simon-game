let gameSeq=[];
let userSeq=[];
let count=0;
let f=0;
let randcolor=["deeppink","blue","orange","blueviolet"];
let started=false;
let level=0;
let h2=document.querySelector("h3")

document.addEventListener("keypress",function(event){
    if(started==false)
    {
        started=true;
    }
    levelUp();
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 300);
}

function levelUp(){
   level++;
   h2.innerHTML=`Level ${level}`;
   for(let i=0;i<level;i++)
   {    
    setTimeout(function (){
        let btnid=Math.floor(Math.random()*3);
        let btncolor=randcolor[btnid];
        gameSeq.push(btncolor);
        let randbtn=document.querySelector(`.${btncolor}`);   
        btnFlash(randbtn);},500*(i+1));
   }
}

function btnpress(){
    let btn=this;
    let key=btn.classList[1];
    userSeq.push(key);
    btnFlash(btn);
    f++;
    if(f==level){
        for(let i=0;i<gameSeq.length;i++)
        {
            if(gameSeq[i]===userSeq[i])
            {
               count++;
            }
            else{
               continue;
            }
        }
        if(count==level)
        {
            h2.innerHTML=`Level ${level +1}`;
            gameSeq=[];
            userSeq=[];
            count=0;
            f=0;
            levelUp();
        }
        else
        {   
            h2.innerHTML=`Game Over your score was ${level-1}! Press any Key to Continue`;
            gameSeq=[];
            userSeq=[];
            count=0;
            f=0;
            level=0;
        }
        }
}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener('click',btnpress);
}





