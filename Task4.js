function OneC(){
    document.getElementById("column1").style.width="100%";
    document.getElementById("column2").style.width="100%";
    document.getElementById("column3").style.width="100%";
    document.getElementById("column4").style.width="100%";
}
function TwoC(){
    document.getElementById("column1").style.width="50%";
    document.getElementById("column2").style.width="50%";
    document.getElementById("column3").style.width="50%";
    document.getElementById("column4").style.width="50%";
}
function FourC(){
    document.getElementById("column1").style.width="25%";
    document.getElementById("column2").style.width="25%";
    document.getElementById("column3").style.width="25%";
    document.getElementById("column4").style.width="25%";
}
let dropList=document.getElementById("dropList");
dropList.style.opacity="0"; 

document.getElementById("drop").addEventListener("click" , function(){
if(dropList.style.opacity=="0"){
dropList.style.opacity="1";
dropList.style.pointerEvents="all";
dropList.style.transform ="translateY(0px)";
document.getElementById("Dicon").className="fas fa-angle-up";
}
else{
dropList.style.opacity="0";
dropList.style.pointerEvents="none";
dropList.style.transform ="translateY(-10px)";
document.getElementById("Dicon").className="fas fa-angle-down";
}
});

const tpTop= document.querySelector(".to_top");
window.addEventListener("scroll" ,()=>{
    if(window.pageYOffset>100)
    tpTop.classList.add("active");
    else
    tpTop.classList.remove("active");
})


/* TASK5 - LIST GRID VIEWS*/
let ListGridTask = document.getElementById("ListGridTask");
function listView(){
    ListGridTask.style.display="block";
}
function gridView(){
    ListGridTask.style.display="flex";
}
/* TASK5 - share Button*/
let shareList=document.getElementById("shareList");
shareList.style.opacity="0"; 

document.getElementById("shareIcon").addEventListener("click" , function(){
if(shareList.style.opacity=="0"){
    shareList.style.opacity="1";
    shareList.style.pointerEvents="all";
    shareList.style.transform ="translateY(0px)";
}
else{
    shareList.style.opacity="0";
    shareList.style.pointerEvents="none";
    shareList.style.transform ="translateY(-5px)";
}
});

/*END TASK5*/