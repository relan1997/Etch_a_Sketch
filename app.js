let size=document.querySelector(".size");
let black=document.querySelector(".black");
let erase=document.querySelector(".eraser");
let random=document.querySelector(".random");
let reset=document.querySelector(".reset");
let txt=document.querySelector("input")
let board=document.querySelector(".board");
let body=document.querySelector("body");
let mouse=document.querySelector(".mouse");
mouse.innerHTML="Deactive";
let click=false;
function changeSize(size)
{
    let sqs=board.querySelectorAll('div');
    sqs.forEach((sq)=>{
        sq.remove();
    });
    board.style.gridTemplateRows=`repeat(${size},1fr)`;
    board.style.gridTemplateColumns=`repeat(${size},1fr)`;
    for(let i=0;i<(size*size);i++)
    {
        let sq=document.createElement("div");
        sq.addEventListener("mouseover",()=>{
            sq.style.backgroundColor="black";
        });
        sq.style.backgroundColor="white";
        board.insertAdjacentElement("beforeend",sq);
    }
}

changeSize(16);

size.addEventListener("click",()=>{
    let sq_size=txt.value;
    changeSize(sq_size);
});
 
black.addEventListener("click",()=>{
    let sqs=board.querySelectorAll("div");
    sqs.forEach((sq)=>{
        sq.addEventListener("mouseover",()=>{
            if(click===true) {sq.style.backgroundColor="black";}
        });
    });
});

erase.addEventListener("click",()=>{
    let sqs=board.querySelectorAll("div");
    sqs.forEach((sq)=>{
        sq.addEventListener("mouseover",()=>{
            if(click===true)  {sq.style.backgroundColor="white";}
        });
    });
});

random.addEventListener("click",()=>{
    let sqs=board.querySelectorAll("div");
    sqs.forEach((sq)=>{
        sq.addEventListener("mouseover",()=>{
            if(click===true)   {sq.style.backgroundColor=`hsl(${Math.random() * 360},100%,50%)`;}
        })
    });
});

reset.addEventListener("click",()=>{
    let sqs=board.querySelectorAll("div");
    sqs.forEach((sq)=>{
        sq.style.backgroundColor="white";
    });
});

body.addEventListener("click",(e)=>{
    if(e.target.tagName!="button"){
    click=!click;
    if(click)
    {
        mouse.innerHTML="Active";
    }
    else mouse.innerHTML="Deactive";
}});    