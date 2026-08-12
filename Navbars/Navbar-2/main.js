const nav = document.querySelector(".nav-bar")



window.addEventListener("scroll", () => {
    if(window.scrollY>0){
        nav.classList.add("scrolled")
    }else{
        nav.classList.remove("scrolled")
    }
})