"use strict"



let btns = document.querySelectorAll(".buttons button");

let toastBox = document.getElementById("toastBox");

let complitedMessege = `<i  class="fa-solid fa-check green"></i> Complited`;

let errorMessage = `<i class="fa-solid fa-x red"></i> Error Message`


let invalidMessage = `<i class="fa-solid fa-exclamation yellow"></i> Invalid Message`

btns[0].addEventListener("click",function(){
    let toast = document.createElement("div");
    toast.classList.add("toast");
    toast.innerHTML = complitedMessege;
    toastBox.appendChild(toast);

    setTimeout(()=>{
        toast.remove()
    },6000)

});

btns[1].addEventListener("click",function(){
    let toast = document.createElement("div");
    toast.classList.add("toast");
    toast.innerHTML = errorMessage;
    toastBox.appendChild(toast);
    setTimeout(()=>{
        toast.remove()
    },6000)
})

btns[2].addEventListener("click",function(){
    let toast = document.createElement("div");
    toast.classList.add("toast");
    toast.innerHTML = invalidMessage;
    toastBox.appendChild(toast);
    setTimeout(()=>{
        toast.remove()
    },6000)
})