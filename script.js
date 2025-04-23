let box_container=document.querySelector("#box-container");
let boxes=document.querySelectorAll(".box");
let winner_box=document.querySelector("#winner-box")
let close_winner_btn=document.querySelector("#close-winner-btn");
let winnerp=document.querySelector("#winner");
let reset_btn=document.querySelector("#reset");
let obtn=document.querySelector("#O");
let xbtn=document.querySelector("#X");
/* console.log(boxes); */
let turn=true;
obtn.classList.add("turn-color");

let possiblity=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

let funct=(event)=>{      // event listener passes the whole selected object block inside the function and thus  
    let box=event.target; // we have to use the object target attribute to store it in box in order to access it.
    /* console.log(box); */
    console.log("clicked");
    if(turn==true){
        box.innerText="O";
        turn=false;
        box.style.cssText="color:crimson";
        box.disabled=true;
        wincheck();
    }
    else{
        box.innerText="X";
        turn=true;
        box.style.cssText="color:blue";
        box.disabled=true;
        wincheck();
    }
    if(turn==true){
        xbtn.classList.remove("turn-color");
        obtn.classList.add("turn-color");
    }
    else{
        obtn.classList.remove("turn-color");
        xbtn.classList.add("turn-color");   
    }
}
boxes.forEach(  // selects all the boxes initially and waits for user to select a particular box which is then added in the event listener.
    (box)=>{box.addEventListener("click",funct);/* console.log(box) */}  // <-- box selected by user.
);

let wincheck=()=>{
    for(pattern of possiblity){
        let pat1=boxes[pattern[0]].innerText;
        let pat2=boxes[pattern[1]].innerText;
        let pat3=boxes[pattern[2]].innerText;

        if(pat1!="" && pat2!="" && pat3!=""){
            if(pat1==pat2 && pat2==pat3){
                console.log("win");
                whenwin(pat1);
            }
        } 
    }      
} 
let whenwin=(winner)=>{
    winnerp.innerText=`winner - ${winner}`;
    winner_box.classList.remove("hide");
    disable_box();
}
let disable_box=()=>{
    for(box of boxes){
        box.disabled=true;
    }
}

let resetftn=()=>{
    for(box of boxes){
        box.innerText="";
        turn=true;
        box.disabled=false;
    }
    obtn.classList.add("turn-color");
    xbtn.classList.remove("turn-color");
}
reset_btn.addEventListener("click", resetftn);
close_winner_btn.addEventListener("click",()=>{ 
    winner_box.classList.add("hide"); 
    resetftn();
    obtn.classList.add("turn-color");
    xbtn.classList.remove("turn-color");
});

