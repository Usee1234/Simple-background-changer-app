let myli=document.querySelectorAll(".subli");
let rvolver=document.querySelector(".mycontainer");
let toggle=document.querySelector(".btn")
let mymode=document.querySelector(".btn2")
// let container=document.querySelector(".head_container")
let header=document.querySelector(".my_header")
let parent=document.getElementById("parent")
let para=document.querySelector(".container_body")
let list=document.querySelector(".list")
let nav=document.querySelector(".navbar")
let headlist=document.querySelector(".subul")
let container_body=document.querySelector(".container_body")
let id=document.getElementById("yy")

// Sliding Navbar functionality//


myli.forEach((items,index)=>{
    items.addEventListener("click",()=>{
        rvolver.style.transform=`translateX(${-100*index}vw)`
    })
})

/// Night mode functionality


toggle.addEventListener("click",()=>{
    parent.classList.toggle("nightMode");
//    console.log(parent.classList.contains("nightMode"))
   if(parent.classList.contains("nightMode")===true){
    para.style.color="white";
    nav.style.color="white";
    console.log(nav)
    headlist.style.color="white"
    header.style.color="white"
    toggle.textContent="Light-Mode"
    container_body.style.borderColor = "red";
   }
   
   else{
    para.style.color="black";
    nav.style.color="black";
    headlist.style.color="black"
    header.style.color="black"
    toggle.textContent="Dark-Mode"
    container_body.style.borderColor="black";
   }
    // para.style.color="white";
    
})


// RANDOM COLOR FUNCTIONALITY


function changeColor(){
    // mymode.classList.add("randomMode")
    document.body.style.backgroundColor=
    'rgb(' + Math.round(Math.random() * 255) +
    ',' +  Math.round(Math.random() * 255) +
    ',' + Math.round(Math.random() * 255) + ')';
    
}




