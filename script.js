const listArr=document.querySelectorAll(".list")
let active = document.querySelector(".active")
let taskTitle=document.querySelector(".task-title>h3")

listArr.forEach((list)=> list.addEventListener("click",(e)=>{
    listArr.forEach((list)=>list.classList.remove("active"))
    list.classList.add("active")
    active = document.querySelector(".active")
    console.log(active)
    taskTitle.innerHTML=active.innerHTML;
}))
