const menu = document.querySelectorAll(".tabs")
menu.forEach((tab)=>{
    tab.addEventListener("click",()=>{
    const activetab = document.querySelector(".active")
    activetab.classList.remove("active");
    tab.classList.add("active")
})
})
