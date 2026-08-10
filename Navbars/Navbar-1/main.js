const menu = document.querySelectorAll(".tabs")
menu.forEach((tab)=>{
    tab.addEventListener("click",()=>{
    const activetab = document.querySelector(".active")
    activetab.classList.remove("active");
    tab.classList.add("active")
})
})

// const theme = document.querySelector("#theme")
// console.log(theme);

// theme.addEventListener("click",()=>{
//     document.querySelector('body').style.background ="white";
//     console.log("clicked");
    
// })
